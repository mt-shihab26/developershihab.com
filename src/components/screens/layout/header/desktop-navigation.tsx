import type { JSXElement } from "solid-js";

import { cn } from "~/lib/utils";
import { links } from "./links";

import { For } from "solid-js";

const Item = (props: { pathname: string; href: string; children: JSXElement }) => {
    const isActive = () => props.pathname === props.href;

    return (
        <li>
            <a
                href={props.href}
                class={cn(
                    "relative block px-3 py-2 transition",
                    isActive()
                        ? "text-teal-500 dark:text-teal-400"
                        : "hover:text-teal-500 dark:hover:text-teal-400"
                )}
            >
                {props.children}
                {isActive() && (
                    <span class="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-700/0 via-teal-700/40 to-teal-700/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
            </a>
        </li>
    );
};

const DesktopNavigation = (props: { class?: string; pathname: string }) => {
    return (
        <nav {...props}>
            <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <For each={links}>
                    {(link) => (
                        <Item pathname={props.pathname} href={link.href}>
                            {link.label}
                        </Item>
                    )}
                </For>
            </ul>
        </nav>
    );
};

export { DesktopNavigation };
