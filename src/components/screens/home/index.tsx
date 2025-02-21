import type { TArticle } from "~/types/content";

import { meta } from "~/lib/meta";

import { For } from "solid-js";
import { GithubIcon } from "~/components/icons/github-icon";
import { InstagramIcon } from "~/components/icons/instagram-icon";
import { LinkedinIcon } from "~/components/icons/linkedin-icon";
import { TwitterIcon } from "~/components/icons/twitter-icon";
import { Container } from "~/components/ui/container";

import { Article } from "./article";
import { Newsletter } from "./news-letter";
import { Photos } from "./photos";
import { Resume } from "./resume";
import { SocialLink } from "./social-ink";

const Home = ({ articles }: { articles: TArticle[] }) => {
    return (
        <>
            <Container class="mt-9">
                <div class="max-w-2xl text-lg">
                    <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Cloud Advocate, hacker, and open source enthusiast.
                    </h1>
                    <p class="prose dark:prose-invert mt-6">
                        I’m Brian, and I teach people how to use the Cloud. I’ve been active in Open
                        Source for as long as I’ve been coding &mdash; and that’s a long time.
                    </p>
                    <p class="prose dark:prose-invert mt-6">
                        With some friends, I wrote a{" "}
                        <a href="https://www.manning.com/books/go-in-action">
                            book about the Go programming language
                        </a>
                        . I’ve given many <a href={"/speaking"}>talks</a> about Go, Distributed
                        Computing, and programming in general.
                    </p>
                    <p class="prose dark:prose-invert mt-6">
                        Poke around and see what I’m up to. It’s all open source, so feel free to
                        contribute.
                    </p>
                    <div class="mt-6 flex gap-6">
                        <SocialLink
                            href={meta.author.twitter}
                            aria-label="Follow on Twitter"
                            icon={TwitterIcon}
                        />
                        <SocialLink
                            href={meta.author.instagram}
                            aria-label="Follow on Instagram"
                            icon={InstagramIcon}
                        />
                        <SocialLink
                            href="https://github.com"
                            aria-label="Follow on GitHub"
                            icon={GithubIcon}
                        />
                        <SocialLink
                            href={meta.author.linkedin}
                            aria-label="Follow on LinkedIn"
                            icon={LinkedinIcon}
                        />
                    </div>
                </div>
            </Container>
            <Photos />
            <Container class="mt-24 md:mt-28">
                <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div class="flex flex-col gap-16">
                        <For each={articles}>{(article) => <Article article={article} />}</For>
                    </div>
                    <div class="space-y-10 lg:pl-16 xl:pl-24">
                        <Newsletter />
                        <Resume />
                    </div>
                </div>
            </Container>
        </>
    );
};

export { Home };
