import { getCollection } from "astro:content";
import { meta } from "~/lib/meta";

import rss from "@astrojs/rss";

export async function GET(context) {
    const articles = await getCollection("articles");

    return rss({
        title: meta.name,
        description: meta.description,
        site: context.site,
        items: articles.map((article) => ({
            title: article.data.title,
            pubDate: article.data.date,
            description: article.data.description,
            link: `/articles/${article.slug}/`
        }))
    });
}
