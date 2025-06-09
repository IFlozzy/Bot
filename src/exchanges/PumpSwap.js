// src/exchanges/PumpSwap.js
// --------------------------------------------------------------
//  • SOL ↔ TOKEN  +  будь‐який стейбл (decimals=6) ↔ SOL ↔ TOKEN
//  • Використовує AMM‐програму “pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA”
//  • Якщо USDC/SOL угод немає — бере SOL/USDC курс із CoinGecko
// --------------------------------------------------------------

import axios               from 'axios';
import Bottleneck          from 'bottleneck';
import { SocksProxyAgent } from 'socks-proxy-agent';

/* ——— Константи ——— */
const ENDPOINT        = 'https://streaming.bitquery.io/eap';
const AMM_PROGRAM_ID  = 'pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA';
const PROGRAMS        = [ AMM_PROGRAM_ID ];

const SOL_MINT   = 'So11111111111111111111111111111111111111112';
const USDC_MINT  = 'EPjFWdd5AufqSSqeM2q8AwP74Wx5iHB85Ggu2zaFiSQC';

const FEE         = 0.003; // 0.3 %

// ← ВАШ ДІЙСНИЙ BITQUERY KEY ПОЧИНАЄТЬСЯ З 'ory_at_'
const BITQUERY_KEY      = 'ory_at_RF9D34BzQ-EQM5Q4L7CqZ0WmNKfH1j4L3AOfEUF7Hx4.2-2XxwD6GqagraXqIN8mCBWXPyrci5r2XRf6geANh4g';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';

/* ——— Bitquery rate‐limit ——— */
const limiter = new Bottleneck({
    reservoir:              240,
    reservoirRefreshAmount: 240,
    reservoirRefreshInterval: 60_000,
    maxConcurrent:          1,
});

/**
 * universalPrice(baseMint, quoteMint) →
 *   остання ціна base/quote у пулі AMM_PROGRAM_ID або 0, якщо угод нема.
 *   Якщо знайдений запис у зворотному порядку (quote/base), інвертуємо.
 */
async function universalPrice(baseMint, quoteMint, proxyUrl) {
    const query = `
    query ($a:String!,$b:String!,$ids:[String!]) {
      Solana {
        DEXTrades(
          limit: { count: 1 },
          orderBy: { descending: Block_Time },
          where: {
            Trade: {
              Dex: { ProgramAddress: { in: $ids } },
              BaseCurrency: { MintAddress: { in: [$a, $b] } },
              QuoteCurrency: { MintAddress: { in: [$a, $b] } }
            },
            Transaction: { Result: { Success: true } }
          }
        ) {
          Trade {
            BaseCurrency { MintAddress }
            QuoteCurrency { MintAddress }
            Price
          }
        }
      }
    }`;
    const cfg = {
        method: 'POST',
        url: ENDPOINT,
        data: { query, variables: { a: baseMint, b: quoteMint, ids: PROGRAMS } },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${BITQUERY_KEY}`,
        },
        timeout: 3000,
    };
    if (proxyUrl) {
        const agent    = new SocksProxyAgent(proxyUrl);
        cfg.httpAgent  = agent;
        cfg.httpsAgent = agent;
        cfg.proxy      = false;
    }

    const res = await limiter.schedule(() => axios(cfg));
    const trd = res.data?.data?.Solana?.DEXTrades?.[0]?.Trade;
    if (!trd) return 0;

    const base  = trd.BaseCurrency.MintAddress;
    const price = Number(trd.Price);
    return base === quoteMint ? 1 / price : price;
}

/**
 * cgSolUsdc(proxyUrl) →
 *   SOL/USDC курс із CoinGecko (USD ≈ USDC). Повертає 0, якщо не вдалося.
 */
async function cgSolUsdc(proxyUrl) {
    try {
        const cfg = {
            method: 'GET',
            url: COINGECKO_API_URL,
            params: { ids: 'solana', vs_currencies: 'usd' },
            timeout: 3000,
        };
        if (proxyUrl) {
            const agent    = new SocksProxyAgent(proxyUrl);
            cfg.httpAgent  = agent;
            cfg.httpsAgent = agent;
            cfg.proxy      = false;
        }
        const { data } = await axios(cfg);
        const solUsd = data.solana.usd;
        return solUsd ? 1 / solUsd : 0; // USD ≈ USDC
    } catch {
        return 0;
    }
}

/**
 * priceTokenPerUsdc(tokenMint, proxyUrl) →
 *   пряма ціна TOKEN/USDC із AMM. Повертає 0, якщо угод нема.
 */
async function priceTokenPerUsdc(tokenMint, proxyUrl) {
    const usdcPerToken = await universalPrice(tokenMint, USDC_MINT, proxyUrl);
    if (!usdcPerToken) return 0;
    return 1 / usdcPerToken;
}

/**
 * priceInSOL(tokenMint, proxyUrl, tokenDecimals) →
 *   остання ціна token/SOL.
 *   Якщо tokenDecimals = 6 (стейбл), effective = USDC_MINT.
 *   Якщо є effective/SOL, повертаємо.
 *   Якщо effective = USDC_MINT та немає USDC/SOL, fallback CoinGecko.
 *   Інакше TOKEN/USDC × USDC/SOL.
 */
async function priceInSOL(tokenMint, proxyUrl, tokenDecimals) {
    const effective = tokenDecimals === 6 ? USDC_MINT : tokenMint;

    // 1) шукаємо effective/SOL
    let p = await universalPrice(effective, SOL_MINT, proxyUrl);
    if (p) return p;

    // 2) якщо effective = USDC_MINT → CoinGecko
    if (effective === USDC_MINT) {
        return await cgSolUsdc(proxyUrl);
    }

    // 3) TOKEN/USDC × USDC/SOL
    const tokUsdc = await universalPrice(effective, USDC_MINT, proxyUrl);
    if (!tokUsdc) return 0;

    let usdcSol = await universalPrice(USDC_MINT, SOL_MINT, proxyUrl);
    if (!usdcSol) {
        usdcSol = await cgSolUsdc(proxyUrl);
        if (!usdcSol) return 0;
    }
    return tokUsdc * usdcSol;
}

/* ───────────────────── PumpSwap ───────────────────── */
class PumpSwap {
    constructor() {
        this.proxyUrl = null;
    }
    setProxy(url) {
        this.proxyUrl = url;
    }

    /**
     * pair: {
     *   chain,
     *   input:  { address, decimals, symbol },
     *   output: { address, decimals, symbol }
     * }
     * amount — кількість input‐токена.
     * Повертає кількість output‐токена (з урахуванням 0.3%) або null.
     */
    async processing(pair, amount, proxy, uid) {
        if (proxy) this.setProxy(proxy);
        if (pair.chain !== 'solana') return null;

        const IN  = pair.input;
        const OUT = pair.output;

        // 1) SOL ↔ TOKEN
        if (IN.address === SOL_MINT || OUT.address === SOL_MINT) {
            return this._solSwap(
                IN.address,  IN.decimals,
                OUT.address, OUT.decimals,
                amount, uid
            );
        }

        // 2) BUY: стейбл (decimals=6) → SOL → TOKEN
        if (IN.decimals === 6) {
            const sol = await this._solSwap(
                IN.address, 6,
                SOL_MINT,   9,
                amount, uid + '-s1'
            );
            return sol
                ? this._solSwap(SOL_MINT, 9, OUT.address, OUT.decimals, sol, uid + '-s2')
                : null;
        }

        // 3) SELL: TOKEN → SOL → стейбл (decimals=6)
        if (OUT.decimals === 6) {
            const sol = await this._solSwap(
                IN.address,  IN.decimals,
                SOL_MINT,   9,
                amount, uid + '-s1'
            );
            return sol
                ? this._solSwap(SOL_MINT, 9, OUT.address, 6,   sol, uid + '-s2')
                : null;
        }

        // 4) Прямий USDC ↔ TOKEN (як на сайті)
        if (IN.address === USDC_MINT) {
            const priceUT = await priceTokenPerUsdc(OUT.address, this.proxyUrl);
            if (!priceUT) return null;
            return amount * priceUT * (1 - FEE);
        }
        if (OUT.address === USDC_MINT) {
            const priceTU = await priceTokenPerUsdc(IN.address, this.proxyUrl);
            if (!priceTU) return null;
            return amount * priceTU * (1 - FEE);
        }

        console.error(`PumpSwap: unsupported mint combo | ${uid}`);
        return null;
    }

    /**
     * _solSwap(fromMint, fromDecimals, toMint, toDecimals, qty, uid) →
     *   чистий своп SOL ↔ TOKEN або STABLE ↔ SOL.
     *   Якщо decimals=6 (стейбл), effective=USDC_MINT.
     */
    async _solSwap(fromMint, fromDecimals, toMint, toDecimals, qty, uid) {
        const effFrom = fromDecimals === 6 ? USDC_MINT : fromMint;
        const effTo   = toDecimals   === 6 ? USDC_MINT : toMint;

        const tokenMint     = effFrom === SOL_MINT ? effTo     : effFrom;
        const tokenDecimals = effFrom === SOL_MINT ? toDecimals : fromDecimals;

        const price = await priceInSOL(tokenMint, this.proxyUrl, tokenDecimals)
            .catch(e => { console.error(`price error | ${uid} |`, e.message); return 0; });
        if (!price) return null;

        // Купівля (effFrom = SOL_MINT)
        if (effFrom === SOL_MINT) {
            return (qty / price) * (1 - FEE);
        }
        // Продаж (effTo = SOL_MINT)
        return (qty * price) * (1 - FEE);
    }

    generateSwapUrl(a, b) {
        return `https://pump.fun/${a}/swap/${b}`;
    }
}

export default PumpSwap;
