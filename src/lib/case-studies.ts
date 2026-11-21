import { getCollection, type CollectionEntry } from "astro:content";

import { getProject } from "@/lib/projects";

/**
 * Published case studies, ordered like their projects: highest priority first, then newest first
 */
export const getCaseStudies = async (): Promise<CollectionEntry<"caseStudies">[]> => {
    const caseStudies = await getCollection("caseStudies", ({ data }) => !data.draft);

    return caseStudies.sort((a, b) => {
        const priorityA = getProject(a.data.project)?.priority ?? 0;
        const priorityB = getProject(b.data.project)?.priority ?? 0;

        if (priorityA !== priorityB) return priorityB - priorityA;

        return b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime();
    });
};
