import type { TPoem } from '@/content/config';

import { getCollection } from 'astro:content';

const poems = async (): Promise<TPoem[]> => {
	return (
		await getCollection('poems', ({ data }) => {
			return import.meta.env.PROD ? data.draft !== true : true;
		})
	).sort((a, b) => (b.data.priority || 0) - (a.data.priority || 0));
};

export default poems;
