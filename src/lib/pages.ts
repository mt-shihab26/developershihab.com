import { headline, name } from "@/lib/information";

export type TPageMeta = { title: string; description: string };

/**
 * Titles and descriptions for the top-level pages. The pages and their OG images both read
 * from here, so the text can't drift apart.
 */
export const pages = {
    home: { title: name, description: headline },
    articles: {
        title: "Articles",
        description:
            "Exploring programming, frontend, backend, and full-stack development deep dives, series, and hands-on insights.",
    },
    poems: {
        title: "Poems",
        description:
            "A collection of my Bengali poems — verses on love, longing, gratitude, and the quiet things of the heart.",
    },
    projects: {
        title: "My Projects",
        description: "Production SaaS products, side projects, and open source tools I have built.",
    },
    caseStudies: {
        title: "Case Studies",
        description:
            "How I designed, built, and run production SaaS products: the problem, the decisions behind the architecture, and the results.",
    },
    contact: {
        title: "Contact",
        description: "Get in touch with me via email or connect on social media.",
    },
    resume: {
        title: "Resume",
        description: `${name}'s resume: experience, projects, open source contributions, skills, and education.`,
    },
} satisfies Record<string, TPageMeta>;

export const categoryPage = (category: string): TPageMeta => ({
    title: category,
    description: `Exploring ${category} insights, lessons, and discoveries from my programming journey.`,
});

export const seriesPage = (series: string): TPageMeta => ({
    title: series,
    description: `Deep dive into ${series} — a curated series from my programming journey.`,
});
