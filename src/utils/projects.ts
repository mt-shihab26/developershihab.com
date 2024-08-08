import { getCollection, type CollectionEntry } from 'astro:content';

export async function getProjects() {
	return await getCollection('projects', ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

export function sortProjectByPriority(projects: Array<CollectionEntry<'projects'>>) {
	return projects.sort((a, b) => (b.data.priority || 0) - (a.data.priority || 0));
}

export function filterFeaturedProjects(projects: Array<CollectionEntry<'projects'>>) {
	return projects.sort((a, b) => (b.data.priority || 0) - (a.data.priority || 0));
}
