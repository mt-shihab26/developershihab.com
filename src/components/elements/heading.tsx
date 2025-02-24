import type { JSXElement } from "solid-js";

import { cn } from "~/lib/utils";

const Heading = (props: { children: JSXElement; class?: string }) => {
    return (
        <h1
            class={cn(
                "text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100",
                props.class
            )}
        >
            {props.children}
        </h1>
    );
};

export { Heading };
