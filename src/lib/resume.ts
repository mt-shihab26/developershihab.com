import Resume from "../components/elements/Resume";

import fs from "fs/promises";
import path from "path";
import puppeteer from "puppeteer";

import React, { type ComponentType } from "react";
import ReactDOMServer from "react-dom/server";

/**
 * Generates a PDF from a React component and saves it to disk
 */
async function generatePDF(Component: ComponentType, outputPath: string, props: Object = {}) {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    try {
        // Create new page
        const page = await browser.newPage();

        // Render the React component to HTML
        const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Component, props));

        // Add proper HTML structure
        const fullHtml = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Generated PDF</title>
                    <style>
                        /* Add any global styles needed for the PDF */
                        body {
                            margin: 0;
                            padding: 20px;
                            font-family: Arial, sans-serif;
                        }
                    </style>
                </head>
                <body>
                    ${html}
                </body>
            </html>
        `;

        // Set the page content
        await page.setContent(fullHtml, {
            waitUntil: ["domcontentloaded", "networkidle0"]
        });

        // Generate PDF
        const pdf = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: {
                top: "20px",
                right: "20px",
                bottom: "20px",
                left: "20px"
            }
        });

        // Ensure the output directory exists
        await fs.mkdir(path.dirname(outputPath), { recursive: true });

        // Write PDF to disk
        await fs.writeFile(outputPath, pdf);

        console.log(`PDF successfully generated and saved to: ${outputPath}`);
    } catch (error) {
        console.error("Error generating PDF:", error);
        throw error;
    } finally {
        await browser.close();
    }
}

generatePDF(Resume, "./public/shihab-mahamud-resume.pdf");
