import type { TAProps, TIcon } from "~/types/utils";

import { splitProps } from "solid-js";

const SocialLink = (
    props: {
        icon: TIcon;
    } & TAProps
) => {
    const [local, others] = splitProps(props, ["icon"]);

    const Icon = local.icon;

    return (
        <a class="group -m-1 p-1" {...others}>
            <Icon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </a>
    );
};

export { SocialLink };
