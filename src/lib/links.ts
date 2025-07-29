import { links } from "~/config/about";

import { DevToIcon } from "~/components/icons/dev-to-icon";
import { FacebookIcon } from "~/components/icons/facebook-icon";
import { GithubIcon } from "~/components/icons/github-icon";
import { InstagramIcon } from "~/components/icons/instagram-icon";
import { LinkedinIcon } from "~/components/icons/linkedin-icon";
import { TwitterIcon } from "~/components/icons/twitter-icon";

export const navigationLinks = [
    { href: "/articles", label: "Articles" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/resume", label: "Resume" }
];

export const socialLinks = [
    {
        label: "Follow on X",
        href: links.x,
        icon: TwitterIcon
    },
    {
        label: "Follow on GitHub",
        href: links.github,
        icon: GithubIcon
    },
    {
        label: "Follow on Dev.to",
        href: links.devTo,
        icon: DevToIcon
    },
    {
        label: "Follow on LinkedIn",
        href: links.linkedin,
        icon: LinkedinIcon
    },
    {
        label: "Follow on Instagram",
        href: links.instagram,
        icon: InstagramIcon
    },
    {
        label: "Follow on Facebook",
        href: links.facebook,
        icon: FacebookIcon
    }
];
