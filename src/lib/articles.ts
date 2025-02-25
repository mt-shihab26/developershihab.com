import type { CollectionEntry } from "astro:content";

import { getCollection } from "astro:content";

export type TArticle = CollectionEntry<"articles">;

const filterPublished = (articles: TArticle[]) => {
    if (import.meta.env.DEV) {
        return articles;
    }
    return articles.filter((article) => article.data.published);
};

export const getArticles = async (): Promise<TArticle[]> => {
    const articles: TArticle[] = await getCollection("articles");
    return filterPublished(articles).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
};

export const getFeaturedArticles = async (): Promise<TArticle[]> => {
    return (await getArticles()).filter((article) => article.data.featured);
};
