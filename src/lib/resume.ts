import { dev } from "astro";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

console.log("Starting Astro dev server...");
const server = await dev({ root, logLevel: "error" });
const { port } = server.address;
console.log(`Dev server running on port ${port}`);

console.log("Launching browser...");
const browser = await puppeteer.launch({ channel: "chrome" }); // the installed Google Chrome, see .puppeteerrc.json
let exitCode = 0;
try {
    const page = await browser.newPage();
    console.log(`Navigating to http://localhost:${port}/render...`);
    await page.goto(`http://localhost:${port}/render`, { waitUntil: "networkidle0" });
    console.log("Generating PDF...");
    await page.pdf({
        path: "public/shihab-mahamud-resume.pdf",
        format: "a4",
        printBackground: true,
        margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
    });
    console.log("PDF saved to public/shihab-mahamud-resume.pdf");
} catch (error) {
    // Fail loudly so a broken build doesn't leave an old PDF looking current
    console.error("Failed to generate the resume PDF:", error);
    exitCode = 1;
} finally {
    console.log("Closing browser and stopping server...");
    await browser.close();
    await server.stop();
    process.exit(exitCode);
}
