import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

import { name, role } from "@/lib/information";

const articles = await getCollection("blog", ({ data }) => !data.draft);
const projects = await getCollection("projects", ({ data }) => !data.noShow);

type PageData = { title: string; description: string };

const pages: Record<string, PageData> = {
    home: { title: name, description: role },
    articles: {
        title: "Articles",
        description:
            "Exploring programming, frontend, backend, and full-stack development deep dives, series, and hands-on insights.",
    },
    projects: {
        title: "My Projects",
        description:
            "Explore my portfolio of innovative web applications, startup ventures, client solutions, and experimental projects.",
    },
    contact: {
        title: "Contact",
        description: "Get in touch with me via email or connect on social media.",
    },
};

for (const article of articles) {
    pages[`articles/${article.id}`] = {
        title: article.data.title,
        description: article.data.description,
    };

    if (article.data.category) {
        pages[`articles/categories/${article.data.category}`] = {
            title: article.data.category,
            description: `Exploring ${article.data.category} insights, lessons, and discoveries from my programming journey.`,
        };
    }

    if (article.data.series) {
        pages[`articles/series/${article.data.series}`] = {
            title: article.data.series,
            description: `Deep dive into ${article.data.series} — a curated series from my programming journey.`,
        };
    }
}

for (const project of projects) {
    pages[`projects/${project.id}`] = {
        title: project.data.name,
        description: project.data.description,
    };
}

export const { getStaticPaths, GET } = await OGImageRoute({
    param: "route",
    pages,
    getImageOptions: (_path, page: PageData) => ({
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
        fonts: [
            "./public/fonts/Inter-Regular.ttf",
            "./public/fonts/Inter-Bold.ttf",
            "./public/fonts/NotoSansBengali.ttf",
        ],
    }),
});
