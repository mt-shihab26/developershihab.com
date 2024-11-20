import type { TBlogEntry } from '@/content/config';

import { getCollection } from 'astro:content';

const blogs = async (): Promise<TBlogEntry[]> => {
	return await getCollection('blogs', ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
};

const sortBlogsByDate = (blogs: TBlogEntry[]): TBlogEntry[] => {
	return blogs.sort((a, b) => {
		const aDate = new Date(a.data.date.updated ?? a.data.date.publish).valueOf();
		const bDate = new Date(b.data.date.updated ?? b.data.date.publish).valueOf();
		return bDate - aDate;
	});
};

const tags = async (): Promise<string[]> => {
	return (await blogs()).flatMap((blog) => [...blog.data.tags]);
};

export const getBlogs = async (): Promise<TBlogEntry[]> => {
	return sortBlogsByDate(await blogs());
};

export const getFeaturedBlogs = async (): Promise<TBlogEntry[]> => {
	const posts = await getBlogs();
	const sliced = posts.slice(0, 10);
	return sliced;
};

export const getUniqueTags = async (): Promise<string[]> => {
	const blogs = await tags();
	return [...new Set(blogs)];
};

export const getUniqueTagsWithCount = async (): Promise<[string, number][]> => {
	const blogs = await tags();
	return [
		...blogs.reduce((acc, t) => acc.set(t, (acc.get(t) || 0) + 1), new Map<string, number>())
	].sort((a, b) => b[1] - a[1]);
};
