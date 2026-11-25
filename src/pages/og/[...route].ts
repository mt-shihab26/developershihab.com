import { getArticles, getCaseStudies, getPoems } from "@/lib/content";

import { OGImageRoute } from "astro-og-canvas";

import { meta as articles } from "@/pages/articles/[...page].astro";
import { getMeta as getCategoryMeta } from "@/pages/articles/categories/[category].astro";
import { getMeta as getSeriesMeta } from "@/pages/articles/series/[series].astro";
import { meta as caseStudies } from "@/pages/case-studies/index.astro";
import { meta as contact } from "@/pages/contact.astro";
import { meta as home } from "@/pages/index.astro";
import { meta as poems } from "@/pages/poems/index.astro";
import { meta as projects } from "@/pages/projects/index.astro";

type TPageMeta = { title: string; description: string };

const pages: Record<string, TPageMeta> = {
    home,
    articles,
    poems,
    projects,
    "case-studies": caseStudies,
    contact,
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
    pages[`articles/categories/${article.data.category}`] = getCategoryMeta(article.data.category);

    if (article.data.series) {
        pages[`articles/series/${article.data.series}`] = getSeriesMeta(article.data.series);
    }
}

export const { getStaticPaths, GET } = await OGImageRoute({
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
