// src/index.js

import { loadConfig } from './config/configManager.js';;
import ExchangeAdapter from './adapters/ExchangeAdapter.js';

// DEX adapters
import Odos from './exchanges/Odos.js';
import Jupiter from './exchanges/Jupiter.js';
import OpenOcean from './exchanges/Openocean.js';
import CoWSwap from './exchanges/CoWSwap.js';
import Magpie from './exchanges/Magpie.js';
import SushiSwap from './exchanges/SushiSwap.js';
import Raydium from './exchanges/Raydium.js';
import Relay from './exchanges/Relay.js';


// CEX adapters
import Bybit from './exchanges/Bybit.js';
import Gate from './exchanges/Gate.js';
import Mexc from './exchanges/Mexc.js';
import Kucoin from './exchanges/Kucoin.js';
import Btse from './exchanges/Btse.js';
import Bitget from './exchanges/Bitget.js';
import CryptoCom from './exchanges/CryptoCom.js';
import Bitmart from './exchanges/Bitmart.js';
import Kraken from './exchanges/Kraken.js';
import Binance from './exchanges/Binance.js';
import Okx from './exchanges/Okx.js';
import Coinex from './exchanges/Coinex.js';

import { calculateProfitPercentage } from './utils/calcProfit.js';
import TelegramNotifier from './telegram/telegramNotifier.js';
import { loadProxies } from './config/proxyManager.js';
import axios from 'axios';
import { SocksProxyAgent } from 'socks-proxy-agent';

const telegram = new TelegramNotifier();

const _origConsoleError = console.error;
console.error = (...args) => {
    const first = args[0];
    const text = first instanceof Error ? first.message : first;
    if (typeof text === 'string' && text.includes('ETELEGRAM: 429 Too Many Requests')) {
        return;
    }
    _origConsoleError(...args);
};

const dexList = ['Odos', 'Jupiter', 'OpenOcean', 'CoWSwap', 'Magpie', 'SushiSwap', 'Raydium', 'Relay'];
const scenarios = Object.keys(loadConfig());
const proxyFlows = Object.values(loadProxies());
/**
 * Обгортає будь-який проміс таймаутом.
 * @param {Promise} promise — оригінальний виклик
 * @param {number} ms — максимальний час в мілісекундах
 */
function withTimeout(promise, ms) {
    let timer;
    const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms);
    });
    return Promise.race([ promise, timeout ]).finally(() => clearTimeout(timer));
}


// ────────────────────────────────────────────────────────────────────────────────
// Check if a proxy is alive by fetching an external IP.
// ────────────────────────────────────────────────────────────────────────────────
async function isProxyAlive(proxyUrl) {
    // AbortController для власного 1с-таймауту
    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), 1000);

    try {
        // SocksProxyAgent з таймаутом handshake 1с
        const agent = new SocksProxyAgent(proxyUrl, { timeout: 1000 });

        await axios.get('http://ifconfig.me/ip', {
            httpAgent:   agent,
            httpsAgent:  agent,
            signal:      controller.signal,
        });

        clearTimeout(timeoutId);
        console.log(`Proxy ${proxyUrl} OK`);
        return true;
    } catch (err) {
        clearTimeout(timeoutId);
        console.error(`Proxy ${proxyUrl} failed: ${err.message}`);
        return false;
    }
}

// ────────────────────────────────────────────────────────────────────────────────
// Prepare CEX instances & cache order-books
// ────────────────────────────────────────────────────────────────────────────────
async function prepareCexInstances(token, buyExList, sellExList, proxy) {
    const allCexNames = new Set();
    for (const ex of buyExList) if (typeof ex === 'string') allCexNames.add(ex);
    for (const ex of sellExList) if (typeof ex === 'string') allCexNames.add(ex);

    const insts = {};
    for (const name of allCexNames) {
        let inst;
        switch (name) {
            case 'Bybit':     inst = new Bybit();     break;
            case 'Gate':      inst = new Gate();      break;
            case 'Mexc':      inst = new Mexc();      break;
            case 'Kucoin':    inst = new Kucoin();    break;
            case 'Btse':      inst = new Btse();      break;
            case 'Bitget':    inst = new Bitget();    break;
            case 'CryptoCom': inst = new CryptoCom(); break;
            case 'Bitmart':   inst = new Bitmart();   break;
            case 'Kraken':    inst = new Kraken();    break;
            case 'Binance':   inst = new Binance();   break;
            case 'Okx':       inst = new Okx();       break;
            case 'Coinex':    inst = new Coinex();    break;
            default:
                console.warn(`Skip unknown CEX: ${name}`);
                continue;
        }

        if (proxy && typeof inst.setProxy === 'function') {
            inst.setProxy(proxy);
        }

        if (typeof inst.getOrderBook === 'function') {
            const symbol = ExchangeAdapter.adaptSymbol(token, name);
            let book;
            try {
                // Гарантуємо таймаут 3с на отримання order book
                book = await withTimeout(
                    inst.getOrderBook(symbol),
                    3000
                );
            } catch (err) {
                console.error(`${name} getOrderBook error: ${err.message}`);
                // Пропускаємо цей CEX, якщо не змогли завантажити книгу
                continue;
            }
            // Заморожуємо результат, щоб не запитувати його знову
            inst.getOrderBook = async () => book;
        }

        insts[name] = inst;
    }

    return insts;
}

// ────────────────────────────────────────────────────────────────────────────────
// Find best BUY (CEX or DEX)
// ────────────────────────────────────────────────────────────────────────────────
async function getBestBuyOption(token, buyExList, amount, proxy, cexInsts) {
    let bestExchange = null;
    let bestResult = 0;

    for (const ex of buyExList) {
        if (typeof ex === 'string') {
            const exName = ex;
            const inst = cexInsts[exName];
            if (!inst) continue;

            const symbol = ExchangeAdapter.adaptSymbol(token, exName);
            const res = await withTimeout(
                    inst.simulateBuy(amount, symbol),
                    3000             // наприклад, 3 секунди
                 ).catch(() => ({ tokensBought: 0 }));
            const tokensBought = res.tokensBought || 0;

            console.log(`[BUY][CEX] ${exName}: ${tokensBought.toFixed(4)}`);

            if (tokensBought > bestResult) {
                bestResult = tokensBought;
                bestExchange = exName;
            }
            continue;
        }

        if (typeof ex === 'object' && ex.inputToken && ex.outputToken) {
            const exName = ex.name;
            if (!dexList.includes(exName)) continue;

            let inst = null;
            switch (exName) {
                case 'Odos':      inst = new Odos();      break;
                case 'Jupiter':   inst = new Jupiter({ slippageBps: 50 }); break;
                case 'OpenOcean': inst = new OpenOcean(); break;
                case 'CoWSwap':   inst = new CoWSwap();   break;
                case 'Magpie':    inst = new Magpie();    break;
                case 'SushiSwap': inst = new SushiSwap(); break;
                case 'Raydium':   inst = new Raydium();   break;
                case 'Relay':     inst = new Relay();     break;
            }
            if (!inst) continue;

            if (proxy && typeof inst.setProxy === 'function') {
                inst.setProxy(proxy);
            }

            const pair = {
                chain: ex.network,
                input: {
                    address: ex.inputToken.address,
                    decimals: ex.inputToken.decimals
                },
                output: {
                    address: ex.outputToken.address,
                    decimals: ex.outputToken.decimals
                }
            };

            const tokensBought = await inst
                .processing(pair, amount, proxy, `buy-${exName}`, ex.network)
                .catch(() => 0) || 0;

            console.log(`[BUY][DEX] ${exName} (${ex.network}): ${tokensBought.toFixed(4)}`);

            if (tokensBought > bestResult) {
                bestResult = tokensBought;
                bestExchange = ex;
            }
        }
    }

    return { bestExchange, bestResult };
}

// ────────────────────────────────────────────────────────────────────────────────
// Find best SELL (CEX or DEX)
// ────────────────────────────────────────────────────────────────────────────────
async function getBestSellOption(token, sellExList, tokenAmount, proxy, cexInsts) {
    let bestExchange = null;
    let bestResult = 0;

    for (const ex of sellExList) {
        if (typeof ex === 'string') {
            const exName = ex;
            const inst = cexInsts[exName];
            if (!inst) continue;

            const symbol = ExchangeAdapter.adaptSymbol(token, exName);
            const res = await inst.simulateSell(tokenAmount, symbol).catch(() => ({ usdtReceived: 0 }));
            const usdtReceived = res.usdtReceived || 0;

            if (usdtReceived > bestResult) {
                bestResult = usdtReceived;
                bestExchange = exName;
            }
            continue;
        }

        if (typeof ex === 'object' && ex.inputToken && ex.outputToken) {
            const exName = ex.name;
            if (!dexList.includes(exName)) continue;

            let inst = null;
            switch (exName) {
                case 'Odos':      inst = new Odos();      break;
                case 'Jupiter':   inst = new Jupiter({ slippageBps: 50 }); break;
                case 'OpenOcean': inst = new OpenOcean(); break;
                case 'CoWSwap':   inst = new CoWSwap();   break;
                case 'Magpie':    inst = new Magpie();    break;
                case 'SushiSwap': inst = new SushiSwap(); break;
                case 'Raydium':   inst = new Raydium();   break;
                case 'Relay':     inst = new Relay();     break;
            }

            if (!inst) continue;

            if (proxy && typeof inst.setProxy === 'function') {
                inst.setProxy(proxy);
            }

            const pair = {
                chain: ex.network,
                input: {
                    address: ex.inputToken.address,
                    decimals: ex.inputToken.decimals
                },
                output: {
                    address: ex.outputToken.address,
                    decimals: ex.outputToken.decimals
                }
            };

            const usdtReceived = await inst
                .processing(pair, tokenAmount, proxy, `sell-${exName}`, ex.network)
                .catch(() => 0) || 0;

            if (usdtReceived > bestResult) {
                bestResult = usdtReceived;
                bestExchange = ex;
            }
        }
    }

    return { bestExchange, bestResult };
}

// ────────────────────────────────────────────────────────────────────────────────
// Run a single scenario (using one proxy). Logs include proxyIndex as “P#”
// ────────────────────────────────────────────────────────────────────────────────
async function runTrade(scenarioName, proxy, proxyIndex) {
    const cfg = loadConfig()[scenarioName];
    if (!cfg) {
        console.error(`[P${proxyIndex}] No config for ${scenarioName}`);
        return;
    }

    const { token, buyExchange, sellExchange, buyAmounts, Bridge, network: scenarioNetwork } = cfg;
    console.log(`
[P${proxyIndex}] Scenario ${scenarioName} (token ${token}${scenarioNetwork ? `, net ${scenarioNetwork}` : ''})`);

    const cexInsts = await prepareCexInstances(token, buyExchange, sellExchange, proxy);

    for (const { amount, notificationThreshold } of buyAmounts) {
        console.log(`[P${proxyIndex}] Amount ${amount} USDT`);

        const { bestExchange: buyEx, bestResult: tokensBought } =
            await getBestBuyOption(token, buyExchange, amount, proxy, cexInsts);

        if (!buyEx || tokensBought <= 0) {
            console.error(`[P${proxyIndex}] Buy failed for ${scenarioName}`);
            continue;
        }

        const buyLabel = typeof buyEx === 'string'
            ? buyEx
            : `${buyEx.name} (${buyEx.network})`;

        console.log(`[P${proxyIndex}] Bought ${tokensBought.toFixed(4)} ${token} on ${buyLabel}`);

        const { bestExchange: sellEx, bestResult: usdtReceived } =
            await getBestSellOption(token, sellExchange, tokensBought, proxy, cexInsts);

        if (!sellEx || usdtReceived <= 0) {
            console.error(`[P${proxyIndex}] Sell failed for ${scenarioName}`);
            continue;
        }

        const sellLabel = typeof sellEx === 'string'
            ? sellEx
            : `${sellEx.name} (${sellEx.network})`;

        console.log(`[P${proxyIndex}] Sold → ${usdtReceived.toFixed(4)} USDT on ${sellLabel}`);

        const profit = usdtReceived - amount;
        const profitPct = calculateProfitPercentage(amount, usdtReceived);
        console.log(`[P${proxyIndex}] Profit: ${profit.toFixed(4)} USDT (${profitPct.toFixed(2)}%)`);

        if (profitPct >= notificationThreshold) {
            const netText = scenarioNetwork ? `Мережа: ${scenarioNetwork}
` : '';
            const msg =
                `${token} - Повідомлення!
` +
                `${netText}` +
                `Прибуток: ${profit.toFixed(2)} USDT (${profitPct.toFixed(2)}%)
` +
                `Купівля: ${amount.toFixed(2)} USDT → ${tokensBought.toFixed(2)} ${token}
` +
                `Отримано: ${usdtReceived.toFixed(2)} USDT
` +
                `Купівля: ${buyLabel}
` +
                `Продаж: ${sellLabel}`;

            await telegram.sendMainMessage(msg, Bridge);
        }

        const logMsg =
            `Сценарій: ${scenarioName}
` +
            `Токен: ${token}
` +
            `Сума: ${amount.toFixed(2)} USDT
` +
            `Купівля: ${buyLabel} → ${tokensBought.toFixed(2)} ${token}
` +
            `Продаж: ${sellLabel} → ${usdtReceived.toFixed(2)} USDT
` +
            `Прибуток: ${profit.toFixed(2)} USDT (${profitPct.toFixed(2)}%)`;
        await telegram.sendLog(logMsg);
    }
}

// ────────────────────────────────────────────────────────────────────────────────
// Main loop: check proxies every 20 cycles, assign scenarios, run in parallel
// ────────────────────────────────────────────────────────────────────────────────
async function main() {
    // завантажуємо весь список лише в старті
    const allProxies   = Object.values(loadProxies());
    let   aliveProxies = [...allProxies];
    let   cycleCount   = 0;

    while (true) {
        try {
            // раз на 20 циклів перевіряємо лише aliveProxies (або весь список, якщо ще нікого не маємо)
            if (cycleCount % 20 === 0) {
                const toCheck = aliveProxies.length ? aliveProxies : allProxies;
                const checks  = toCheck.map(url =>
                    isProxyAlive(url).then(ok => ok ? url : null).catch(() => null)
                );
                const results = await Promise.all(checks);
                aliveProxies  = results.filter(Boolean);
                console.log(`Active proxies (rechecked): ${aliveProxies.length}`);
            }

            if (!aliveProxies.length) {
                console.error('No active proxies available — чекаємо наступної перевірки');
                await new Promise(r => setTimeout(r, 2000));
                cycleCount++;
                continue;
            }

            // тут ваша звична логіка запуску сценаріїв, наприклад:
            const tasks = scenarios.map((sc, idx) => {
                const proxy = aliveProxies[idx % aliveProxies.length];
                return runTrade(sc, proxy, idx + 1).catch(e => console.error(e));
            });
            await Promise.allSettled(tasks);

            cycleCount++;
        } catch (e) {
            console.error(`Main loop error: ${e.message}`);
            await new Promise(r => setTimeout(r, 5000));
            cycleCount++;
        }
    }
}

     const keyArg = process.argv[2];
if (keyArg) {
      // Одноразовий запуск без проксі (proxy = null, proxyIndex = 1)
           runTrade(keyArg, null, 1)
    .catch(err => console.error(err))
      .then(() => process.exit(0));
   } else {
   // Стандартний нескінченний цикл
      main().catch(err => console.error(`Fatal error: ${err.message}`));
  }
