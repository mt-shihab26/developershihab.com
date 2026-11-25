import type { CollectionEntry } from "astro:content";

import { getCollection } from "astro:content";
import { getProject } from "@/content/projects";

export const getArticles = async (): Promise<CollectionEntry<"articles">[]> => {
    const articles = await getCollection("articles", ({ data }) => {
        return !data.draft;
    });

    return articles.sort((a, b) => {
        return b.data.published_at.getTime() - a.data.published_at.getTime();
    });
};

export const getPoems = async (): Promise<CollectionEntry<"poems">[]> => {
    const poems = await getCollection("poems", ({ data }) => {
        return !data.draft;
    });

    return poems.sort((a, b) => {
        return b.data.published_at.getTime() - a.data.published_at.getTime();
    });
};

export const getCaseStudies = async (): Promise<CollectionEntry<"case_studies">[]> => {
    const caseStudies = await getCollection("case_studies", ({ data }) => {
        return !data.draft;
    });

    return caseStudies.sort((a, b) => {
        const priorityA = getProject(a.data.project)?.priority ?? 0;
        const priorityB = getProject(b.data.project)?.priority ?? 0;

        return priorityB - priorityA || b.data.published_at.getTime() - a.data.published_at.getTime();
    });
};

export const getCategories = (articles: CollectionEntry<"articles">[]): string[] => {
    const categories = articles.map(article => {
        return article.data.category;
    });

    return [...new Set(categories)];
};

export const getSeries = (articles: CollectionEntry<"articles">[]): string[] => {
    const series = articles.flatMap(article => {
        return article.data.series ? [article.data.series] : [];
    });

    return [...new Set(series)];
};
