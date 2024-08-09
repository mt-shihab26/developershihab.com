import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export type TBlog = CollectionEntry<'post'>;

/** Note: this function filters out draft posts based on the environment */
export async function getAllPosts() {
	return await getCollection('post', ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

export function sortMDByDate(posts: Array<CollectionEntry<'post'>>) {
	return posts.sort((a, b) => {
		const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
		const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
		return bDate - aDate;
	});
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getAllTags(posts: Array<CollectionEntry<'post'>>) {
	return posts.flatMap((post) => [...post.data.tags]);
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTagsWithCount(
	posts: Array<CollectionEntry<'post'>>
): Array<[string, number]> {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>()
		)
	].sort((a, b) => b[1] - a[1]);
}

export const allBlogs = async () => {
	return sortMDByDate(await getAllPosts());
};

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export const getUniqueTags = (blogs: TBlog[]) => {
	return [...new Set(getAllTags(blogs))];
};

export const featuredPosts = async () => {
	const posts = await getAllPosts();
	const sorted = sortMDByDate(posts);
	const sliced = sorted.slice(0, 10);
	return sliced;
};
