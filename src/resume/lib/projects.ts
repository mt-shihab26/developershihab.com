import type { TProject } from "~/components/screens/resume/projects";

import { read } from "./read";

const getResumeProjects = async (): Promise<TProject[]> => {
    const projects = await read();
    return projects
        .toSorted((a, b) => a.order - b.order)
        .filter((p) => p.resume)
        .map((p) => ({
            slug: p.slug,
            name: p.name,
            technologies: p.technologies,
            description: p.description,
            link: p.link
        }));
};

export { getResumeProjects };
