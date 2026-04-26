import { dev } from "astro";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const server = await dev({ root, logLevel: "error" });
const { port } = server.address;

const browser = await puppeteer.launch();
try {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}/render`, { waitUntil: "networkidle0" });
    await page.pdf({
        path: "public/shihab-mahamud-resume.pdf",
        format: "a4",
        printBackground: true,
        margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
    });
} finally {
    await browser.close();
    await server.stop();
}
