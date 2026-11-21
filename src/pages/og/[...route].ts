import { getCollection } from "astro:content";

import { categoryPage, pages as staticPages, seriesPage, type TPageMeta } from "@/lib/pages";

import { OGImageRoute } from "astro-og-canvas";

const articles = await getCollection("blog", ({ data }) => !data.draft);
const poems = await getCollection("poems", ({ data }) => !data.draft);
const caseStudies = await getCollection("caseStudies", ({ data }) => !data.draft);

const pages: Record<string, TPageMeta> = {
    home: staticPages.home,
    articles: staticPages.articles,
    poems: staticPages.poems,
    projects: staticPages.projects,
    "case-studies": staticPages.caseStudies,
    contact: staticPages.contact,
};

for (const article of articles) {
    pages[`articles/${article.id}`] = {
        title: article.data.title,
        description: article.data.description,
    };

    if (article.data.category) {
        pages[`articles/categories/${article.data.category}`] = categoryPage(article.data.category);
    }

    if (article.data.series) {
        pages[`articles/series/${article.data.series}`] = seriesPage(article.data.series);
    }
}

for (const caseStudy of caseStudies) {
    pages[`case-studies/${caseStudy.id}`] = {
        title: caseStudy.data.title,
        description: caseStudy.data.description,
    };
}

for (const poem of poems) {
    pages[`poems/${poem.id}`] = {
        title: poem.data.title,
        description: poem.data.description,
    };
}

export const { getStaticPaths, GET } = await OGImageRoute({
    param: "route",
    pages,
    getImageOptions: (_path, page: TPageMeta) => ({
        title: page.title,
        description: page.description,
        bgGradient: [
            [9, 9, 11],
            [24, 24, 27],
        ],
        border: {
            color: [99, 102, 241],
            width: 16,
            side: "inline-start",
        },
        padding: 80,
        font: {
            title: {
                color: [250, 250, 250],
                size: 60,
                families: ["Inter", "Noto Sans Bengali"],
                weight: "Bold",
                lineHeight: 1.15,
            },
            description: {
                color: [161, 161, 170],
                size: 30,
                families: ["Inter", "Noto Sans Bengali"],
                weight: "Normal",
                lineHeight: 1.4,
            },
        },
        fonts: ["./public/inter-regular.ttf", "./public/inter-bold.ttf", "./public/noto-sans-bengali.ttf"],
    }),
});
