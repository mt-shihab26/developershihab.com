import type { CollectionEntry } from "astro:content";

import { getCollection } from "astro:content";
import { getProject } from "@/lib/projects";

export const getArticles = async (): Promise<CollectionEntry<"articles">[]> =>
    (await getCollection("articles", ({ data }) => !data.draft)).sort(
        (a, b) => b.data.published_at.getTime() - a.data.published_at.getTime()
    );

export const getPoems = async (): Promise<CollectionEntry<"poems">[]> =>
    (await getCollection("poems", ({ data }) => !data.draft)).sort(
        (a, b) => b.data.published_at.getTime() - a.data.published_at.getTime()
    );

export const getCaseStudies = async (): Promise<CollectionEntry<"case_studies">[]> => {
    const caseStudies = await getCollection("case_studies", ({ data }) => !data.draft);

    return caseStudies.sort((a, b) => {
        const priorityA = getProject(a.data.project)?.priority ?? 0;
        const priorityB = getProject(b.data.project)?.priority ?? 0;

        return priorityB - priorityA || b.data.published_at.getTime() - a.data.published_at.getTime();
    });
};

export const getCategories = (articles: CollectionEntry<"articles">[]): string[] => [
    ...new Set(articles.map(article => article.data.category)),
];

export const getSeries = (articles: CollectionEntry<"articles">[]): string[] => [
    ...new Set(articles.flatMap(article => (article.data.series ? [article.data.series] : []))),
];
