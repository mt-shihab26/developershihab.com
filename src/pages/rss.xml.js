import { getCollection } from "astro:content";
import { description, name } from "~/lib/info";

import rss from "@astrojs/rss";

export async function GET(context) {
    const articles = await getCollection("articles");

    return rss({
        title: name,
        description: description,
        site: context.site,
        items: articles.map((article) => ({
            title: article.data.title,
            pubDate: article.data.date,
            description: article.data.description,
            link: `/articles/${article.slug}/`
        }))
    });
}
