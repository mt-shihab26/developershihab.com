import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
    schema: () =>
        z.object({
            pubDatetime: z.date(),
            series: z.string().optional(),
            image: z.string().optional(),
            title: z.string(),
            draft: z.boolean().optional(),
            tags: z.array(z.string()).default(["others"]),
            category: z.string(),
            description: z.string(),
            devTo: z.string().optional(),
        }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/projects" }),
    schema: () =>
        z.object({
            name: z.string(),
            technologies: z.array(z.string()),
            description: z.string(),
            image: z.string().optional(),
            source: z.string().optional(),
            preview: z.string().optional(),
            facebook: z.string().optional(),
            instagram: z.string().optional(),
            type: z.union([z.literal("core"), z.literal("side"), z.literal("startup")]),
            resume: z.boolean().optional(),
            priority: z.number().optional(),
            draft: z.boolean().optional(),
            noShow: z.boolean().optional().default(false),
        }),
});

export const collections = { blog, projects };
