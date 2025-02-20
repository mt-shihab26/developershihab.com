import type { TArticle } from "~/types/content";

import { time } from "~/lib/time";

import { Card, CardCta, CardDescription, CardEyebrow, CardTitle } from "~/components/ui/card";

const Article = (props: { article: TArticle }) => {
    return (
        <Card as="article">
            <CardTitle href={`/articles/${props.article.slug}`}>{props.article.title}</CardTitle>
            <CardEyebrow as="time" decorate>
                {time.formatDate(props.article.date)}
            </CardEyebrow>
            <CardDescription>{props.article.description}</CardDescription>
            <CardCta>Read article</CardCta>
        </Card>
    );
};

export { Article };
