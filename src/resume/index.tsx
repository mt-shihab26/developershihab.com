import { renderToString } from "react-dom/server";
import { base } from "./base";
import { pdf } from "./pdf";
import { getResumeProjects } from "./projects";

import { Resume } from "~/components/screens/resume";

const render = async () => {
    const projects = await getResumeProjects();

    const resume = renderToString(<Resume projects={projects} />);
    return base(resume);
};

const html = await render();
const path = "public/shihab-mahamud-resume.pdf";

await pdf(html, path);
