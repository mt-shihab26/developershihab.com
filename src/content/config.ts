import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().transform((str) => new Date(str)),
        featured: z.boolean().default(false)
    })
});

const projects = defineCollection({
    type: "content",
    schema: z.object({
        logo: z.string(),
        name: z.string(),
        description: z.string(),
        date_start: z.string(),
        date_end: z.string(),
        link_href: z.string(),
        link_label: z.string(),
        link_external: z.boolean().default(false)
    })
});

export const collections = {
    articles,
    projects
};
