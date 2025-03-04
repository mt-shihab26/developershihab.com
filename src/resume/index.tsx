import { renderToString } from "react-dom/server";

import { base } from "./lib/base";
import { pdf } from "./lib/pdf";
import { getResumeProjects } from "./lib/projects";

import { Resume } from "./components";

const render = async () => {
    const projects = await getResumeProjects();

    const resume = renderToString(<Resume projects={projects} />);
    return base(resume);
};

const html = await render();
const path = "public/shihab-mahamud-resume.pdf";

await pdf(html, path);
