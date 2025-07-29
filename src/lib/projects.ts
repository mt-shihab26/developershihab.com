import { projects, type TProject } from "~/config/projects";

export const getClientProjects = (): TProject[] => {
    return projects.filter((p) => p.type === "client");
};

export const getDemoProjects = (): TProject[] => {
    return projects.filter((p) => p.type === "demo");
};

export const getOSSProjects = (): TProject[] => {
    return projects.filter((p) => p.type === "oss");
};

export const getResumeProjects = (): TProject[] => {
    return projects.filter((p) => p.resume);
};
