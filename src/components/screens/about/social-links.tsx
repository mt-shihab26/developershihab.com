import type { JSXElement } from "solid-js";
import type { TIcon } from "~/types/utils";

import { social_links } from "~/config/social_links";
import { meta } from "~/lib/meta";
import { cn } from "~/lib/utils";

import { Mail2Icon } from "~/components/icons/mail2-icon";

const SocialLink = (props: { class?: string; href: string; children: JSXElement; icon: TIcon }) => {
    const Icon = props.icon;

    return (
        <li class={cn("flex", props.class)}>
            <a
                href={props.href}
                class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                target="_blank"
            >
                <Icon class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span class="ml-4">{props.children}</span>
            </a>
        </li>
    );
};

const SocialLinks = () => {
    return (
        <div class="lg:pl-20">
            <ul role="list" class="space-y-4">
                {social_links.map((l) => (
                    <SocialLink href={l.href} icon={l.icon}>
                        {l.label}
                    </SocialLink>
                ))}
                <SocialLink
                    href={`mailto:${meta.email}`}
                    icon={Mail2Icon}
                    class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                >
                    {meta.email}
                </SocialLink>
            </ul>
        </div>
    );
};

export { SocialLinks };
