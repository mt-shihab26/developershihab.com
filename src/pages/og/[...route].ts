import { getArticles, getCaseStudies, getPoems } from "@/lib/content";
import { categoryPage, seriesPage, pages as staticPages, type TPageMeta } from "@/lib/pages";

import { OGImageRoute } from "astro-og-canvas";

const pages: Record<string, TPageMeta> = {
    home: staticPages.home,
    articles: staticPages.articles,
    poems: staticPages.poems,
    projects: staticPages.projects,
    "case-studies": staticPages.caseStudies,
    contact: staticPages.contact,
};

const entries = {
    articles: await getArticles(),
    "case-studies": await getCaseStudies(),
    poems: await getPoems(),
};

for (const [path, list] of Object.entries(entries)) {
    for (const entry of list) {
        pages[`${path}/${entry.id}`] = { title: entry.data.title, description: entry.data.description };
    }
}

for (const article of entries.articles) {
    pages[`articles/categories/${article.data.category}`] = categoryPage(article.data.category);

    if (article.data.series) {
        pages[`articles/series/${article.data.series}`] = seriesPage(article.data.series);
    }
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
