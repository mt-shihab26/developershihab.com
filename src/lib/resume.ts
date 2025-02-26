import puppeteer from "puppeteer";

const generate = async (html: string, path: string) => {
    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });

    await page.pdf({ path, format: "A4", printBackground: true });

    await browser.close();

    return path;
};

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Generated PDF</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      line-height: 1.6;
    }
    h1 {
      color: #333;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
    }
    .content {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>Generated PDF Document</h1>
  <div class="content">
    <p>This is a PDF generated using Puppeteer.</p>
    <p>You can include any HTML and CSS here to style your PDF document.</p>
  </div>
</body>
</html>
`;

generate(html, "dist/html-example.pdf");
