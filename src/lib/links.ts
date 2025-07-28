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

export const socialHrefs = {
    x: "https://x.com/mt_shihab26",
    github: "https://github.com/mt-shihab26",
    devTo: "https://dev.to/mt-shihab26",
    linkedin: "https://linkedin.com/in/mt-shihab26",
    instagram: "https://instagram.com/mt.shihab26",
    facebook: "https://web.facebook.com/mt.shihab26",
    email: "mt.shihab26@gmail.com",
    phone: "+880 1758-776344"
};

export const socialLinks = [
    {
        label: "Follow on X",
        href: socialHrefs.x,
        icon: TwitterIcon
    },
    {
        label: "Follow on GitHub",
        href: socialHrefs.github,
        icon: GithubIcon
    },
    {
        label: "Follow on Dev.to",
        href: socialHrefs.devTo,
        icon: DevToIcon
    },
    {
        label: "Follow on LinkedIn",
        href: socialHrefs.linkedin,
        icon: LinkedinIcon
    },
    {
        label: "Follow on Instagram",
        href: socialHrefs.instagram,
        icon: InstagramIcon
    },
    {
        label: "Follow on Facebook",
        href: socialHrefs.facebook,
        icon: FacebookIcon
    }
];
