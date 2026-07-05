import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function makeIcon() {
  const browser = await puppeteer.connect({ browserURL: 'http://127.0.0.1:9222' });
  const page = await browser.newPage();
  await page.setContent(`
    <html>
      <body style="margin: 0; padding: 0; background: white; display: flex; align-items: center; justify-content: center; width: 512px; height: 512px;">
        <img src="http://127.0.0.1:3000/antigravity-logo-new.png" style="width: 100%; height: 100%; object-fit: contain;">
      </body>
    </html>
  `);
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(__dirname, 'public', 'ag2r-icon.png'), clip: { x: 0, y: 0, width: 512, height: 512 } });
  await page.screenshot({ path: path.join(__dirname, 'public', 'apple-touch-icon.png'), clip: { x: 0, y: 0, width: 512, height: 512 } });
  await page.close();
  browser.disconnect();
}
makeIcon().catch(console.error);
