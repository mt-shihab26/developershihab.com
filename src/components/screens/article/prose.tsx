import type { JSXElement } from "solid-js";

import { cn } from "~/lib/utils";

const Prose = (props: { class: string; children: JSXElement }) => {
    return (
        <div
            class={cn(
                "pt-6 prose prose-lg text-xl max-w-none dark:prose-invert ",
                // headings
                // lead
                // links
                // link underline
                // pre
                // hr
                "dark:prose-hr:border-zinc-800",
                props.class
            )}
        >
            {props.children}
        </div>
    );
};

export { Prose };
