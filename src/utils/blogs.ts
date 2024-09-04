import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export type TBlog = CollectionEntry<'blogs'>;

const getAllBlogs = async (): Promise<TBlog[]> => {
	return await getCollection('blogs', ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
};

const sortMDByDate = (blogs: TBlog[]): TBlog[] => {
	return blogs.sort((a, b) => {
		const aDate = new Date(a.data.date.updated ?? a.data.date.publish).valueOf();
		const bDate = new Date(b.data.date.updated ?? b.data.date.publish).valueOf();
		return bDate - aDate;
	});
};

const getAllTags = async (): Promise<string[]> => {
	return (await getAllBlogs()).flatMap((blog) => [...blog.data.tags]);
};

export const allBlogs = async (): Promise<TBlog[]> => {
	return sortMDByDate(await getAllBlogs());
};

export const featuredBlogs = async (): Promise<TBlog[]> => {
	const posts = await allBlogs();
	const sliced = posts.slice(0, 10);
	return sliced;
};

export const getUniqueTags = async (): Promise<string[]> => {
	const blogs = await getAllTags();
	return [...new Set(blogs)];
};

export const getUniqueTagsWithCount = async (): Promise<[string, number][]> => {
	const blogs = await getAllTags();
	return [
		...blogs.reduce((acc, t) => acc.set(t, (acc.get(t) || 0) + 1), new Map<string, number>())
	].sort((a, b) => b[1] - a[1]);
};
