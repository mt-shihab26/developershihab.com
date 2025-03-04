import type { TProject } from "~/components/screens/resume/projects";

const getResumeProjects = async (): Promise<TProject[]> => {
    const projects: TProject[] = [];
    return projects.filter((p) => p);
};

export { getResumeProjects };
