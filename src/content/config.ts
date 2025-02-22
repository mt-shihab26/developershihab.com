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

export const collections = {
    articles
};
