import type { CollectionEntry } from "astro:content";

import { getCollection } from "astro:content";

export type TProject = CollectionEntry<"projects">;

const getProjects = async (): Promise<TProject[]> => {
    const projects = await getCollection("projects");
    return projects.toSorted((a, b) => a.data.order - b.data.order);
};

export const getClientProjects = async (): Promise<TProject[]> => {
    const projects = await getProjects();
    return projects.filter((p) => p.data.type === "client");
};

export const getDemoProjects = async (): Promise<TProject[]> => {
    const projects = await getProjects();
    return projects.filter((p) => p.data.type === "demo");
};

export const getOssProjects = async (): Promise<TProject[]> => {
    const projects = await getProjects();
    return projects.filter((p) => p.data.type === "oss");
};

export const getResumeProjects = async (): Promise<TProject[]> => {
    const projects = await getProjects();
    return projects.filter((p) => p.data.resume);
};
