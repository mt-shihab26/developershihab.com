import type { CollectionEntry } from 'astro:content';

import { defineCollection, z } from 'astro:content';

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const dateSchema = z
	.string()
	.or(z.date())
	.transform((val) => new Date(val));

const type = z.enum(['client', 'demo', 'tool']);

export const collections = {
	blogs: defineCollection({
		type: 'content',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				date: z.object({ publish: dateSchema, updated: dateSchema.optional() }),
				cover: z.object({ src: image(), alt: z.string() }).optional(),
				draft: z.boolean().default(false),
				tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
				ogimage: z.string().optional()
			})
	}),
	projects: defineCollection({
		type: 'content',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				type,
				description: z.string(),
				date: z.object({ start: z.string(), end: z.string() }).optional(),
				technologies: z.array(z.string()).optional(),
				logo: z.object({ src: z.string(), alt: z.string() }).optional(),
				cover: z.object({ src: image(), alt: z.string() }).optional(),
				ogimage: z.string().optional(),
				links: z.array(z.object({ label: z.string(), link: z.string() })).optional(),
				draft: z.boolean().default(false),
				featured: z.boolean().default(false),
				priority: z.number().optional()
			})
	})
};

export type TType = z.infer<typeof type>;
export type TProject = CollectionEntry<'projects'>;
