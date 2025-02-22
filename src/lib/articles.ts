import type { CollectionEntry } from "astro:content";

import { getCollection } from "astro:content";

export type TArticle = CollectionEntry<"articles">;

export const getArticles = async (): Promise<TArticle[]> => {
    const articles: TArticle[] = await getCollection("articles");
    return articles.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
};

export const getFeaturedArticles = async (): Promise<TArticle[]> => {
    return (await getArticles()).filter((article) => article.data.featured);
};

///**
// * Gets a specific number of most recent articles
// */
//export async function getRecentArticles(limit: number = 3): Promise<TArticle[]> {
//    const articles = await getArticles();
//    return articles.slice(0, limit);
//}
//
///**
// * Gets related articles based on current article
// * Excludes the current article and returns most recent ones
// */
//export async function getRelatedArticles(
//    currentSlug: string,
//    limit: number = 3
//): Promise<TArticle[]> {
//    const articles = await getArticles();
//    return articles.filter((article) => article.slug !== currentSlug).slice(0, limit);
//}
//
///**
// * Gets articles for pagination
// */
//export async function getPaginatedArticles(
//    page: number = 1,
//    articlesPerPage: number = 10
//): Promise<{
//    articles: TArticle[];
//    totalPages: number;
//    currentPage: number;
//}> {
//    const articles = await getArticles();
//    const totalArticles = articles.length;
//    const totalPages = Math.ceil(totalArticles / articlesPerPage);
//
//    // Ensure page is within valid range
//    const currentPage = Math.max(1, Math.min(page, totalPages));
//    const start = (currentPage - 1) * articlesPerPage;
//    const end = start + articlesPerPage;
//
//    return {
//        articles: articles.slice(start, end),
//        totalPages,
//        currentPage
//    };
//}
//
///**
// * Gets the next and previous articles based on the current article
// */
//export async function getAdjacentArticles(currentSlug: string): Promise<{
//    prev: TArticle | null;
//    next: TArticle | null;
//}> {
//    const articles = await getArticles();
//    const currentIndex = articles.findIndex((article) => article.slug === currentSlug);
//
//    return {
//        prev: currentIndex > 0 ? articles[currentIndex - 1] : null,
//        next: currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null
//    };
//}
//
///**
// * Searches articles based on a query string
// * Searches in title and description
// */
//export async function searchArticles(query: string): Promise<TArticle[]> {
//    const articles = await getArticles();
//    const searchTerm = query.toLowerCase();
//
//    return articles.filter(
//        (article) =>
//            article.data.title.toLowerCase().includes(searchTerm) ||
//            article.data.description.toLowerCase().includes(searchTerm)
//    );
//}
//
///**
// * Example usage in an Astro component:
// *
// * ---
// * import {
// *   getAllArticles,
// *   getFeaturedArticles,
// *   getPaginatedArticles,
// *   searchArticles
// * } from '../utils/articles';
// *
// * // Get all articles
// * const allArticles = await getAllArticles();
// *
// * // Get featured articles
// * const featuredArticles = await getFeaturedArticles(['article-1', 'article-2']);
// *
// * // Get paginated articles
// * const { articles, totalPages, currentPage } = await getPaginatedArticles(1, 10);
// *
// * // Search articles
// * const searchResults = await searchArticles('typescript');
// * ---
// */
