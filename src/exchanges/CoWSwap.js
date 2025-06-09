import fetch from 'node-fetch';
import { SocksProxyAgent } from 'socks-proxy-agent';
import Bottleneck from 'bottleneck';
import networkTags from '../networks/networkCow.js';

class CoWSwap {
    constructor() {
        this.proxyUrl = null;
        this.limiter = new Bottleneck({ maxConcurrent: 1, minTime: 200 });
    }

    setProxy(proxyUrl) {
        this.proxyUrl = proxyUrl;
    }

    async getQuote(params, network) {
        const url = `https://api.cow.fi/${network}/api/v1/quote`;

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params),
        };

        if (this.proxyUrl) {
            options.agent = new SocksProxyAgent(this.proxyUrl);
        }

        return this.limiter.schedule(() =>
            fetch(url, options).then(res => res.ok ? res.json() : null)
        ).catch(e => {
            console.error('CoWSwap fetch error:', e);
            return null;
        });
    }

    async processing(pair, amount, proxy, uniqueId, network) {
        if (proxy) this.setProxy(proxy);

        const params = {
            sellToken: pair.input.address,
            buyToken: pair.output.address,
            from: '0x0000000000000000000000000000000000000000', // Симуляційна адреса
            receiver: '0x0000000000000000000000000000000000000000',
            kind: 'sell',
            sellAmountBeforeFee: BigInt(Math.floor(amount * 10 ** pair.input.decimals)).toString(),
        };

        const quote = await this.getQuote(params, network);
        if (!quote || quote.errorType) {
            console.error(`CoWSwap error (${uniqueId}):`, quote?.errorType, quote?.description);
            return null;
        }

        const buyAmount = quote.buyAmount ?? quote?.quote?.buyAmount ?? quote?.order?.buyAmount;
        return Number(buyAmount) / (10 ** pair.output.decimals);
    }
}

export default CoWSwap;
