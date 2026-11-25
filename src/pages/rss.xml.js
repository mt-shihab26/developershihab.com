import { desc, title } from "@/content/information";
import { getArticles, getCaseStudies, getPoems } from "@/lib/content";
import { getProject } from "@/lib/projects";

import rss from "@astrojs/rss";

const toItem = (path, entry, categories) => ({
    title: entry.data.title,
    pubDate: entry.data.published_at,
    description: entry.data.description,
    link: `/${path}/${entry.id}/`,
    categories,
});

export async function GET(context) {
    const items = [
        ...(await getArticles()).map(article =>
            toItem("articles", article, [article.data.category, ...article.data.tags])
        ),
        ...(await getCaseStudies()).map(caseStudy =>
            toItem("case-studies", caseStudy, [
                "case study",
                ...(getProject(caseStudy.data.project)?.technologies ?? []),
            ])
        ),
        ...(await getPoems()).map(poem => toItem("poems", poem, ["poem"])),
    ];

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
