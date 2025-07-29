import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().transform((str) => new Date(str)),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
        published: z.boolean().default(false),
        dev_to: z.string().optional()
    })
});

const projects = defineCollection({
    type: "content",
    schema: z.object({
        type: z.enum(["client", "demo", "oss"]),
        name: z.string(),
        technologies: z.array(z.string()),
        startDate: z.string().transform((s) => new Date(s)),
        endDate: z
            .string()
            .optional()
            .transform((s) => s && new Date(s)),
        liveLink: z.string(),
        published: z.boolean().default(false),
        resume: z.boolean().default(false),
        order: z.number()
    })
});

export const collections = {
    articles,
    projects
};
