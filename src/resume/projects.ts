import type { TProject } from "~/lib/projects";

const getResumeProjects = async (): Promise<TProject[]> => {
    const projects: TProject[] = [];
    return projects.filter((p) => p.data.resume);
};

export { getResumeProjects };
