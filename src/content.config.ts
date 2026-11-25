import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/articles" }),
    schema: () =>
        z.object({
            pubDatetime: z.date(),
            // Optional date of the last meaningful update, shown next to the publish date
            updatedDatetime: z.date().optional(),
            series: z.string().optional(),
            title: z.string(),
            draft: z.boolean().optional(),
            tags: z.array(z.string()).default(["others"]),
            category: z.string(),
            description: z.string(),
            devTo: z.string().optional(),
        }),
});

// Live link, source, technologies, and priority come from the linked project, when there is one,
// in src/lib/projects.ts, so they are not repeated here
const caseStudies = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/case-studies" }),
    schema: () =>
        z.object({
            // Optional slug of the project this case study is about, from src/lib/projects.ts
            project: z.string().optional(),
            // Headline shown on the index card and the page title
            title: z.string(),
            // One or two sentences: the problem and the outcome
            description: z.string(),
            // Optional logo path under public/, e.g. "/logos/paystubhero.svg"
            logo: z.string().startsWith("/").optional(),
            logoAlt: z.string().optional(),
            // Publish date, used for ordering and the RSS feed
            pubDatetime: z.date(),
            // Optional date of the last meaningful update, shown next to the publish date
            updatedDatetime: z.date().optional(),
            draft: z.boolean().optional(),
        }),
});

const poems = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/poems" }),
    schema: () =>
        z.object({
            pubDatetime: z.date(),
            title: z.string(),
            draft: z.boolean().optional(),
            description: z.string(),
        }),
});

export const collections = { articles, caseStudies, poems };
