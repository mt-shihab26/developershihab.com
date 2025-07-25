import { meta } from "~/lib/meta";

import { DevToIcon } from "~/components/icons/dev-to-icon";
import { FacebookIcon } from "~/components/icons/facebook-icon";
import { GithubIcon } from "~/components/icons/github-icon";
import { InstagramIcon } from "~/components/icons/instagram-icon";
import { LinkedinIcon } from "~/components/icons/linkedin-icon";
import { TwitterIcon } from "~/components/icons/twitter-icon";

const social_links = [
    {
        label: "Follow on X",
        href: meta.x,
        icon: TwitterIcon
    },
    {
        label: "Follow on GitHub",
        href: meta.github,
        icon: GithubIcon
    },
    {
        label: "Follow on Dev.to",
        href: meta.dev_to,
        icon: DevToIcon
    },
    {
        label: "Follow on LinkedIn",
        href: meta.linkedin,
        icon: LinkedinIcon
    },
    {
        label: "Follow on Instagram",
        href: meta.instagram,
        icon: InstagramIcon
    },
    {
        label: "Follow on Facebook",
        href: meta.facebook,
        icon: FacebookIcon
    }
];

export { social_links };
