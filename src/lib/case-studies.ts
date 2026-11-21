import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Published case studies, highest priority first, then newest first
 */
export const getCaseStudies = async (): Promise<CollectionEntry<"caseStudies">[]> => {
    const caseStudies = await getCollection("caseStudies", ({ data }) => !data.draft);

    return caseStudies.sort((a, b) => {
        const priorityA = a.data.priority ?? 0;
        const priorityB = b.data.priority ?? 0;

        if (priorityA !== priorityB) return priorityB - priorityA;

        return b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime();
    });
};
