import { renderToString } from "react-dom/server";

import { Resume } from "./resume";

const base = (resume: string) => {
    return `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>shihab-mahamud-resume.pdf</title>
                <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
            </head>
            <body>${resume}</body>
        </html>
    `;
};

const render = () => {
    const resume = renderToString(<Resume />);
    return base(resume);
};

export { render };
