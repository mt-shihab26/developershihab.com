import rss from '@astrojs/rss';

import { siteConfig } from '@/site-config';
import { allBlogs } from '@/utils/blogs';

export const GET = async () => {
	const blogs = await allBlogs();

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: blogs.map((blog) => ({
			title: blog.data.title,
			description: blog.data.description,
			pubDate: blog.data.publishDate,
			link: `/blogs/${blog.slug}`
		}))
	});
};
