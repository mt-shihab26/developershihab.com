import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
    schema: () =>
        z.object({
            published_at: z.date(),
            updated_at: z.date().optional(),
            series: z.string().optional(),
            title: z.string(),
            draft: z.boolean().optional(),
            tags: z.array(z.string()).default(["others"]),
            category: z.string(),
            description: z.string(),
            dev_to: z.string().optional(),
        }),
});

const case_studies = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/case-studies" }),
    schema: () =>
        z.object({
            project: z.string().optional(),
            title: z.string(),
            description: z.string(),
            logo: z.string().startsWith("/").optional(),
            logo_alt: z.string().optional(),
            published_at: z.date(),
            updated_at: z.date().optional(),
            draft: z.boolean().optional(),
        }),
});

const poems = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/poems" }),
    schema: () =>
        z.object({
            published_at: z.date(),
            title: z.string(),
            draft: z.boolean().optional(),
            description: z.string(),
        }),
});

export const collections = { articles, case_studies, poems };
