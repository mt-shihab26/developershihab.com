import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const loader = (collection: string) => {
    return glob({ pattern: "**/*.{md,mdx}", base: `./src/content/${collection}` });
};

export const collections = {
    articles: defineCollection({
        loader: loader("articles"),
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
    }),
    case_studies: defineCollection({
        loader: loader("case-studies"),
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
    }),
    poems: defineCollection({
        loader: loader("poems"),
        schema: () =>
            z.object({
                published_at: z.date(),
                title: z.string(),
                draft: z.boolean().optional(),
                description: z.string(),
            }),
    }),
};
