import type { TAProps, TIcon } from "~/types/utils";

import { splitProps } from "solid-js";
import { meta } from "~/lib/meta";

import { GithubIcon } from "~/components/icons/github-icon";
import { InstagramIcon } from "~/components/icons/instagram-icon";
import { LinkedinIcon } from "~/components/icons/linkedin-icon";
import { TwitterIcon } from "~/components/icons/twitter-icon";

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

const SocialLinks = () => {
    return (
        <div class="mt-6 flex gap-6">
            <SocialLink href={meta.twitter} aria-label="Follow on Twitter" icon={TwitterIcon} />
            <SocialLink
                href={meta.instagram}
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
            />
            <SocialLink href="https://github.com" aria-label="Follow on GitHub" icon={GithubIcon} />
            <SocialLink href={meta.linkedin} aria-label="Follow on LinkedIn" icon={LinkedinIcon} />
        </div>
    );
};

export { SocialLinks };
