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

export const collections = {
    articles
};
