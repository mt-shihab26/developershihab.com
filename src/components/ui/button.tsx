import type { JSX } from "solid-js";

import { cn } from "~/lib/utils";

type TVariant = "primary" | "secondary";

const variantStyles: Record<TVariant, string> = {
    primary:
        "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
    secondary:
        "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
};

const Button = (props: {
    type?: "submit" | "button";
    children?: JSX.Element;
    variant?: TVariant;
    class?: string;
    href?: string;
}) => {
    const clases = cn(
        "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
        variantStyles[props.variant || "primary"],
        props.class
    );

    return props.href ? (
        <a href={props.href} class={clases} {...props} />
    ) : (
        <button class={clases} {...props} />
    );
};

export { Button };
