import type { TProject } from "@/content/config";

import { getCollection } from "astro:content";

const projects = async (): Promise<TProject[]> => {
    return await getCollection("projects", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    });
};

const sortProjectByPriority = (projects: TProject[]): TProject[] => {
    return projects.sort((a, b) => (b.data.priority || 0) - (a.data.priority || 0));
};

const filterFeaturedProjects = (projects: TProject[]): TProject[] => {
    return projects.filter((p) => p.data.featured);
};

export const getProjects = async (): Promise<TProject[]> => {
    return sortProjectByPriority(await projects());
};

export const getFeaturedProjects = async (): Promise<TProject[]> => {
    return filterFeaturedProjects(await getProjects());
};
