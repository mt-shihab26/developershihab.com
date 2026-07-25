import { desc, title } from "@/lib/information";
import { getCollection } from "astro:content";

import rss from "@astrojs/rss";

export async function GET(context) {
    const blog = (await getCollection("blog", entry => !entry.data.draft)).map(post => ({
        title: post.data.title,
        pubDate: post.data.pubDatetime,
        description: post.data.description,
        link: `/articles/${post.id}/`,
        categories: [post.data.category, ...post.data.tags],
    }));

    const projects = (await getCollection("projects", entry => !entry.data.draft)).map(project => ({
        title: project.data.name,
        pubDate: new Date(),
        description: project.data.description,
        link: `/projects/${project.id}/`,
        categories: ["project", ...project.data.technologies],
    }));

    const poems = (await getCollection("poems", entry => !entry.data.draft)).map(poem => ({
        title: poem.data.title,
        pubDate: poem.data.pubDatetime,
        description: poem.data.description,
        link: `/poems/${poem.id}/`,
        categories: ["poem"],
    }));

    const items = [...blog, ...projects, ...poems];

    items.sort((a, b) => b.pubDate - a.pubDate);

    return rss({
        title,
        description: desc,
        site: context.site,
        trailingSlash: false,
        items,
        stylesheet: "/rss-styles.xsl",
    });
}
