import type { JSXElement } from "solid-js";

import { cn } from "~/lib/utils";

const Paragraph = (props: { children: JSXElement; class?: string }) => {
    return <p class={cn("prose dark:prose-invert", props.class)}>{props.children}</p>;
};

export { Paragraph };
