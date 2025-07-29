import { renderToString } from "react-dom/server";
import { pdf } from "./pdf";
import { getResumeProjects } from "./projects";

import { Resume } from "~/components/screens/resume";

const flags = () => {
    return {
        image: false
    };
};

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

const render = async () => {
    const projects = await getResumeProjects();
    const image = flags().image;

    const resume = renderToString(<Resume projects={projects} image={image} />);
    return base(resume);
};

const html = await render();
const path = "public/shihab-mahamud-resume.pdf";

await pdf(html, path);
