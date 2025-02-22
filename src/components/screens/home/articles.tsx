import type { TArticle } from "~/lib/articles";

import { time } from "~/lib/time";

import { For } from "solid-js";
import { Card, CardCta, CardDescription, CardEyebrow, CardTitle } from "~/components/ui/card";

const Article = (props: { article: TArticle }) => {
    return (
        <Card as="article">
            <CardTitle href={`/articles/${props.article.slug}`}>
                {props.article.data.title}
            </CardTitle>
            <CardEyebrow as="time" decorate>
                {time.formatToLongDate(props.article.data.date)}
            </CardEyebrow>
            <CardDescription>{props.article.data.description}</CardDescription>
            <CardCta>Read article</CardCta>
        </Card>
    );
};

const Articles = ({ articles }: { articles: TArticle[] }) => {
    return (
        <div class="flex flex-col gap-16">
            <For each={articles}>{(article) => <Article article={article} />}</For>
        </div>
    );
};

export { Articles };
