// convert.mjs  ─ лежить у тій самій теці, що й CoinConfig.js
import fs                  from 'fs';
import path                from 'path';
import { pathToFileURL }   from 'url';

// формуємо правильний file:// URL навіть на Windows
const cfgURL = pathToFileURL(path.resolve('./CoinConfig.js'));

const { default: CoinConfig } = await import(cfgURL.href);

fs.mkdirSync('./config', { recursive: true });
fs.writeFileSync(
    './config/coins.json',
    JSON.stringify(CoinConfig, null, 2)
);

console.log(`✅  coins.json створено: ${Object.keys(CoinConfig).length} сценаріїв`);
