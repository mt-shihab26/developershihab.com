import rss from '@astrojs/rss';

import { siteConfig } from './../config/site';
import { getBlogs } from './../utils/blogs';

export const GET = async () => {
	const blogs = await getBlogs();

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: blogs.map((blog) => ({
			title: blog.data.title,
			description: blog.data.description,
			pubDate: blog.data.date.publish,
			link: `/blogs/${blog.slug}`
		}))
	});
};
