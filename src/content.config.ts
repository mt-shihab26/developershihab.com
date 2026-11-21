import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
    schema: () =>
        z.object({
            pubDatetime: z.date(),
            series: z.string().optional(),
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
            source: z.string().optional(),
            preview: z.string().optional(),
            facebook: z.string().optional(),
            instagram: z.string().optional(),
            type: z.union([z.literal("core"), z.literal("side"), z.literal("startup"), z.literal("opensource")]),
            resume: z.boolean().optional(),
            priority: z.number().optional(),
            draft: z.boolean().optional(),
            noShow: z.boolean().optional().default(false),
        }),
});

const caseStudies = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/case-studies" }),
    schema: () =>
        z.object({
            // Headline shown on the index card and the page title
            title: z.string(),
            // One or two sentences: the problem and the outcome
            summary: z.string(),
            // Optional logo path under public/, e.g. "/logos/paystubhero.svg"
            logo: z.string().startsWith("/").optional(),
            logoAlt: z.string().optional(),
            // Optional link to the matching entry in the projects collection
            project: reference("projects").optional(),
            client: z.string().optional(),
            industry: z.string().optional(),
            // What I did on the project, e.g. "Sole developer"
            role: z.string(),
            // Free-form range, e.g. "May 2023 – Present"
            timeline: z.string(),
            pubDatetime: z.date(),
            technologies: z.array(z.string()).default([]),
            // Headline numbers shown as stat tiles at the top of the page
            metrics: z
                .array(
                    z.object({
                        label: z.string(),
                        value: z.string(),
                    })
                )
                .default([]),
            preview: z.string().url().optional(),
            source: z.string().url().optional(),
            // Higher numbers are listed first
            priority: z.number().optional(),
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

export const collections = { blog, projects, caseStudies, poems };
