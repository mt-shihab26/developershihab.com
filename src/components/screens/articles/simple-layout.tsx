import type { JSXElement } from "solid-js";

import { Container } from "~/components/ui/container";

const SimpleLayout = (props: { title: string; intro: string; children: JSXElement }) => {
    return (
        <Container class="mt-16 sm:mt-32">
            <header class="max-w-2xl">
                <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {props.title}
                </h1>
                <p class="mt-6 text-lg text-zinc-600 dark:text-zinc-400">{props.intro}</p>
            </header>
            <div class="mt-16 sm:mt-20">{props.children}</div>
        </Container>
    );
};

export { SimpleLayout };
