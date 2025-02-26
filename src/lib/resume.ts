import puppeteer from "puppeteer";

const render = async () => {
    return `
        <div>Hello</div>
    `;
};

const generate = async (html: string, path: string) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.pdf({ path, format: "A4", printBackground: true });
    await browser.close();
    return path;
};

const html = await render();
const path = await generate(html, "dist/html-example.pdf");

console.log(`PDF generated: ${path}`);
