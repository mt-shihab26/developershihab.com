import puppeteer from "puppeteer";

export const pdf = async (html: string, path: string) => {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        await page.setContent(html);
        await page.pdf({ path, format: "a4", printBackground: true });
    } finally {
        await browser.close();
    }
};
