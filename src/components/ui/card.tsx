import type { JSX } from "solid-js";
import type { TAsProps } from "~/types/utils";

import { mergeProps, splitProps } from "solid-js";
import { cn } from "~/lib/utils";

import { Dynamic } from "solid-js/web";
import { ChevronRightIcon } from "~/components/icons/chevron-right-icon";

const Card = (props: { as?: TAsProps; class?: string; children?: JSX.Element }) => {
    return (
        <Dynamic
            component={props.as || "div"}
            class={cn(props.class, "group relative flex flex-col items-start")}
        >
            {props.children}
        </Dynamic>
    );
};

const CardLink = (props: { children: JSX.Element; href: string; target?: "_blank" }) => {
    return (
        <>
            <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
            <a href={props.href} target={props.target}>
                <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span class="relative z-10">{props.children}</span>
            </a>
        </>
    );
};

const CardTitle = (props: { as?: TAsProps; href?: string; children: JSX.Element }) => {
    return (
        <Dynamic
            component={props.as || "h2"}
            class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
        >
            {props.href ? <CardLink href={props.href}>{props.children}</CardLink> : props.children}
        </Dynamic>
    );
};

const CardDescription = (props: { children: JSX.Element }) => {
    return (
        <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{props.children}</p>
    );
};

const CardCta = (props: { children: JSX.Element }) => {
    return (
        <div
            aria-hidden="true"
            class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
            {props.children}
            <ChevronRightIcon class="ml-1 h-4 w-4 stroke-current" />
        </div>
    );
};

const CardEyebrow = (
    p: {
        as?: TAsProps;
        decorate?: boolean;
        class?: string;
        children?: JSX.Element;
    } & JSX.HTMLAttributes<HTMLElement>
) => {
    const props = mergeProps({ as: "p", decorate: false }, p);

    const [localProps, otherProps] = splitProps(props, ["as", "decorate", "class", "children"]);

    return (
        <Dynamic
            component={localProps.as}
            class={cn(
                localProps.class,
                "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-500",
                localProps.decorate && "pl-3.5"
            )}
            {...otherProps}
        >
            {localProps.decorate && (
                <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                </span>
            )}
            {localProps.children}
        </Dynamic>
    );
};

export { Card, CardCta, CardDescription, CardEyebrow, CardLink, CardTitle };
