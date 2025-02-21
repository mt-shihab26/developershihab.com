import type { TAProps, TDivProps } from "~/types/utils";

import { splitProps } from "solid-js";
import { cn } from "~/lib/utils";

import shihabImage from "~/assets/images/shihab.jpg";

const AvatarContainer = (props: { class?: string } & TDivProps) => {
    const [local, others] = splitProps(props, ["class"]);

    return (
        <div
            class={cn(
                "h-10 w-10 rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-zinc-800/5",
                "ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10",
                local.class
            )}
            {...others}
        />
    );
};

const Avatar = (props: { large?: boolean; class?: string } & TAProps) => {
    const [local, others] = splitProps(props, ["large", "class"]);

    const large = () => local.large ?? false;

    return (
        <a href="/" aria-label="Home" class={cn(local.class, "pointer-events-auto")} {...others}>
            <img
                src={shihabImage.src}
                alt=""
                sizes={large() ? "4rem" : "2.25rem"}
                class={cn(
                    "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
                    large() ? "h-16 w-16" : "h-9 w-9"
                )}
            />
        </a>
    );
};

export { Avatar, AvatarContainer };
