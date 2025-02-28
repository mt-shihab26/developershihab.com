import type { CollectionEntry } from "astro:content";

import { getCollection } from "astro:content";

export type TProject = CollectionEntry<"projects">;

export const getProjects = async (): Promise<TProject[]> => {
    const projects: TProject[] = await getCollection("projects");
    return projects.toSorted((a, b) => a.data.order - b.data.order);
};
