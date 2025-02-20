import { cn } from "~/lib/utils";

import shihabImage from "@/images/shihab.jpg";

export function AvatarContainer(props: any) {
    return (
        <div
            class={cn(
                "h-10 w-10 rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-zinc-800/5",
                "ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10",
                props.class,
            )}
            {...props}
        />
    );
}

export function Avatar({ large = false, class, ...props }) {
    return (
        <a
            href="/"
            aria-label="Home"
            class={cn(className, "pointer-events-auto")}
            {...props}
        >
            <img
                src={shihabImage.src}
                alt=""
                sizes={large ? "4rem" : "2.25rem"}
                class={cn(
                    "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
                    large ? "h-16 w-16" : "h-9 w-9"
                )}
            />
        </a>
    );
}


