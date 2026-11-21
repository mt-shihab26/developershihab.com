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

/**
 * URL of the published case study linked to a project, if there is one
 */
export const getCaseStudyHref = async (projectId: string): Promise<string | undefined> => {
    const caseStudies = await getCaseStudies();
    const caseStudy = caseStudies.find(c => c.data.project?.id === projectId);

    return caseStudy ? `/case-studies/${caseStudy.id}` : undefined;
};
