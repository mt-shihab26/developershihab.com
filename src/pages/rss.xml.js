import { getCollection } from "astro:content";

import rss from "@astrojs/rss";

export async function GET(context) {
    const blog = await getCollection("blog", entry => !entry.data.draft);
    const projects = await getCollection("projects", entry => !entry.data.draft);

    const allItems = [
        ...blog.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDatetime,
            description: post.data.description,
            link: `/articles/${post.id}/`,
            categories: [post.data.category, ...post.data.tags],
        })),
        ...projects.map(project => ({
            title: project.data.name,
            pubDate: new Date(),
            description: project.data.description,
            link: `/projects/${project.id}/`,
            categories: ["project", ...project.data.technologies],
        })),
    ];

    // Sort by publication date (newest first)
    allItems.sort((a, b) => b.pubDate - a.pubDate);

    return rss({
        title: "Shihab Mahamud - Blog & Projects",
        description: "Latest articles and projects from Shihab Mahamud - Full Stack Developer",
        site: context.site,
        items: allItems,
        customData: `<language>en-us</language>`,
    });
}

