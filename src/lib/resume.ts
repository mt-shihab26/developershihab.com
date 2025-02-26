import ejs from "ejs";
import fs from "fs/promises";
import puppeteer from "puppeteer";

const read = async () => {
    const filePath = "src/components/screens/resume/index.ejs";
    return await fs.readFile(filePath, "utf-8");
};

const render = async () => {
    const content = await read();
    return ejs.render(content, { foo: "bar" });
};

const generate = async (html: string, path: string) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.pdf({ path, format: "A4", printBackground: true });
    await browser.close();
    return path;
};

(async () => {
    try {
        const html = await render();
        const outputPath = await generate(html, "dist/html-example.pdf");
        console.log(`PDF generated: ${outputPath}`);
    } catch (error) {
        console.error("Failed to generate PDF:", error);
    }
})();
