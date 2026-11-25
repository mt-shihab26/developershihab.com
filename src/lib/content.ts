import type { CollectionEntry } from "astro:content";

import { getProject } from "@/lib/projects";
import { getCollection } from "astro:content";

export const getArticles = async (): Promise<CollectionEntry<"articles">[]> =>
    (await getCollection("articles", ({ data }) => !data.draft)).sort(
        (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
    );

export const getPoems = async (): Promise<CollectionEntry<"poems">[]> =>
    (await getCollection("poems", ({ data }) => !data.draft)).sort(
        (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
    );

/**
 * Published case studies, ordered like their projects: highest priority first, then newest first
 */
export const getCaseStudies = async (): Promise<CollectionEntry<"caseStudies">[]> => {
    const caseStudies = await getCollection("caseStudies", ({ data }) => !data.draft);

    return caseStudies.sort((a, b) => {
        const priorityA = getProject(a.data.project)?.priority ?? 0;
        const priorityB = getProject(b.data.project)?.priority ?? 0;

        return priorityB - priorityA || b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime();
    });
};

export const getCategories = (articles: CollectionEntry<"articles">[]): string[] => [
    ...new Set(articles.map(article => article.data.category)),
];

export const getSeries = (articles: CollectionEntry<"articles">[]): string[] => [
    ...new Set(articles.flatMap(article => (article.data.series ? [article.data.series] : []))),
];
