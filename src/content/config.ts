import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().transform((str) => new Date(str)),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
        published: z.boolean().default(false)
    })
});

const projects = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            type: z.enum(["client", "demo", "oss"]),
            logo: image(),
            name: z.string(),
            description: z.string(),
            technologies: z.array(z.string()),
            date: z.object({
                start: z.string().transform((str) => new Date(str)),
                end: z
                    .string()
                    .optional()
                    .transform((str) => str && new Date(str))
            }),
            link: z
                .object({
                    href: z.string(),
                    label: z.string().optional()
                })
                .optional(),
            live: z
                .object({
                    href: z.string(),
                    label: z.string().optional()
                })
                .optional(),
            case_study: z.boolean().default(false),
            featured: z.boolean().default(false),
            published: z.boolean().default(false),
            resume: z.boolean().default(false),
            order: z.number()
        })
});

export const collections = {
    articles,
    projects
};
