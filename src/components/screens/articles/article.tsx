import type { TArticle } from "~/lib/articles";

import { time } from "~/lib/time";

import { Card, CardCta, CardDescription, CardEyebrow, CardTitle } from "~/components/ui/card";

const Article = (props: { article: TArticle }) => {
    return (
        <article class="md:grid md:grid-cols-4 md:items-baseline">
            <Card class="md:col-span-3">
                <CardTitle href={`/articles/${props.article.slug}`}>
                    {props.article.data.title}
                </CardTitle>
                <CardEyebrow
                    as="time"
                    date-time={props.article.data.date}
                    class="md:hidden"
                    decorate
                >
                    {time.formatToLongDate(props.article.data.date)}
                </CardEyebrow>
                <CardDescription>{props.article.data.description}</CardDescription>
                <CardCta>Read article</CardCta>
            </Card>
            <CardEyebrow as="time" date-time={props.article.data.date} class="mt-1 hidden md:block">
                {time.formatToLongDate(props.article.data.date)}
            </CardEyebrow>
        </article>
    );
};

export { Article };
