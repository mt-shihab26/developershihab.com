import { getCollection, type CollectionEntry } from 'astro:content';

export type TProject = CollectionEntry<'projects'>;

const getProjects = async (): Promise<TProject[]> => {
	return await getCollection('projects', ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
};

const sortProjectByPriority = (projects: TProject[]): TProject[] => {
	return projects.sort((a, b) => (b.data.priority || 0) - (a.data.priority || 0));
};

const filterFeaturedProjects = (projects: TProject[]): TProject[] => {
	return projects.sort((a, b) => (b.data.priority || 0) - (a.data.priority || 0));
};

export const allProjects = async (): Promise<TProject[]> => {
	return sortProjectByPriority(await getProjects());
};

export const featuredProjects = async (): Promise<TProject[]> => {
	return filterFeaturedProjects(await allProjects());
};
