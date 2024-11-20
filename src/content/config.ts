import { defineCollection, z, type CollectionEntry } from 'astro:content';

type TRender = () => Promise<{ Content: any }>;

export type TImage = {
	src: {
		src: string;
		width: number;
		height: number;
		format: any;
		fsPath?: string;
	};
	alt: string;
};

// blogs

const removeDupsAndLowerCase = (array: string[]) => {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
};

const dateSchema = z
	.string()
	.or(z.date())
	.transform((val) => new Date(val));

const blogs = defineCollection({
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
});

export type TBlog = {
	id: string;
	slug: string;
	body: string;
	collection: 'blogs';
	data: {
		title: string;
		description: string;
		date: {
			publish: Date;
			updated?: Date;
		};
		cover?: TImage;
		draft: boolean;
		tags: string[];
		ogimage?: string;
	};
	render: TRender;
};

export type TBlogEntry = CollectionEntry<'blogs'>;

// projects

const projectType = z.enum(['client', 'demo', 'tool']);

export type TProjectType = 'client' | 'demo' | 'tool';

const projects = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			type: projectType,
			title: z.string(),
			description: z.string(),
			technologies: z.array(z.string()).optional(),
			links: z.object({ source_code: z.string().optional(), live_link: z.string().optional() }),
			date: z.object({ start: z.string(), end: z.string() }).optional(),
			images: z.array(z.object({ src: image(), alt: z.string() })).optional(),
			ogimage: z.string().optional(),
			draft: z.boolean().default(false),
			featured: z.boolean().default(false),
			priority: z.number().optional()
		})
});

export type TProject = {
	id: string;
	slug: string;
	body: string;
	collection: 'projects';
	data: {
		type: TProjectType;
		title: string;
		description: string;
		technologies?: string[];
		links: {
			source_code?: string;
			live_link?: string;
		};
		date?: {
			start: string;
			end: string;
		};
		images?: TImage[];
		ogimage?: string;
		draft: boolean;
		featured: boolean;
		priority?: number;
	};
	render: TRender;
};

// export type TProjectEntry = CollectionEntry<'projects'>;

// poems

const poems = defineCollection({
	type: 'content',
	schema: () =>
		z.object({
			name: z.string(),
			draft: z.boolean().default(false),
			priority: z.number().optional()
		})
});

export type TPoem = {
	id: string;
	slug: string;
	body: string;
	collection: 'poems';
	data: {
		name: string;
		draft: boolean;
		priority?: number;
	};
	render: TRender;
};

// export type TPoemEntry = CollectionEntry<'poems'>;

// collections

export const collections = {
	blogs,
	projects,
	poems
};
