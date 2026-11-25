import {
    C,
    ClaudeAI,
    DigitalOcean,
    Facebook,
    Git,
    Go,
    JavaScript,
    Laravel,
    Linux,
    MySQL,
    NeoVim,
    NodeJs,
    OpenAI,
    PHP,
    React,
    ShadcnUI,
    TailwindCSS,
    TypeScript,
    VueJs,
    WordPress,
} from "developer-icons";

import type { TSkill } from "@/types/content";

import { developmentStart } from "@/content/information";
import { formatYearCount, countYearsSince } from "@/lib/dates";

import { InertiaIcon } from "@/components/icons/inertia-icon";
import { StripeIcon } from "@/components/icons/stripe-icon";
import { TanStackIcon } from "@/components/icons/tanstack-icon";

export const skills: { label: string; items: TSkill[] }[] = [
    {
        label: "Languages",
        items: [
            {
                title: "TypeScript",
                href: "https://www.typescriptlang.org",
                since: developmentStart,
                level: "Advanced",
                icon: TypeScript,
                resume_title: "JS/TS",
            },
            {
                title: "JavaScript",
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                since: developmentStart,
                level: "Advanced",
                icon: JavaScript,
                resume_disable: true,
            },
            {
                title: "PHP",
                href: "https://www.php.net",
                since: "May 2023",
                level: "Advanced",
                icon: PHP,
            },
            {
                title: "C/C++",
                href: "https://www.c-language.org",
                level: "Intermediate",
                icon: C,
            },
            {
                title: "Go",
                href: "https://go.dev",
                level: "Intermediate",
                icon: Go,
            },
        ],
    },
    {
        label: "Frameworks",
        items: [
            {
                title: "React",
                href: "https://react.dev",
                since: "May 2023",
                level: "Advanced",
                icon: React,
            },
            {
                title: "Laravel",
                href: "https://laravel.com",
                since: "May 2023",
                level: "Advanced",
                icon: Laravel,
            },
            {
                title: "Inertia.js",
                href: "https://inertiajs.com/",
                since: "May 2023",
                level: "Advanced",
                icon: InertiaIcon,
            },
            {
                title: "TailwindCSS",
                href: "https://tailwindcss.com/",
                since: "May 2023",
                level: "Advanced",
                icon: TailwindCSS,
            },
            {
                title: "shadcn/ui",
                href: "https://ui.shadcn.com/",
                since: "Jan 2024",
                level: "Advanced",
                icon: ShadcnUI,
            },
            {
                title: "WordPress",
                href: "https://wordpress.org",
                level: "Intermediate",
                icon: WordPress,
            },
            {
                title: "Node.js",
                href: "https://nodejs.org/",
                level: "Intermediate",
                icon: NodeJs,
            },
            {
                title: "Vue.js",
                href: "https://vuejs.org",
                level: "Basic",
                icon: VueJs,
                resume_disable: true,
            },
            {
                title: "TanStack",
                href: "https://tanstack.com",
                level: "Basic",
                icon: TanStackIcon,
                resume_disable: true,
            },
        ],
    },
    {
        label: "Others",
        items: [
            {
                title: "MySQL",
                href: "https://www.mysql.com",
                level: "Intermediate",
                icon: MySQL,
            },
            {
                title: "Linux",
                href: "https://www.kernel.org",
                level: "Intermediate",
                icon: Linux,
            },
            {
                title: "Git",
                href: "https://git-scm.com/",
                level: "Intermediate",
                icon: Git,
            },
            {
                title: "Neovim",
                href: "https://neovim.io",
                level: "Intermediate",
                icon: NeoVim,
            },
            {
                title: "Stripe",
                href: "https://stripe.com",
                level: "Intermediate",
                icon: StripeIcon,
            },
            {
                title: "Claude Code",
                href: "https://claude.ai/code",
                level: "Advanced",
                icon: ClaudeAI,
            },
            {
                title: "DigitalOcean",
                href: "https://digitalocean.com",
                level: "Basic",
                icon: DigitalOcean,
                resume_disable: true,
            },
            {
                title: "OpenAI API",
                href: "https://platform.openai.com",
                level: "Intermediate",
                icon: OpenAI,
            },
            {
                title: "Facebook API",
                href: "https://developers.facebook.com",
                level: "Basic",
                icon: Facebook,
            },
        ],
    },
];

export const formatSkillDetail = (skill: TSkill, separator = ", "): string => {
    const details = [skill.level, skill.since && formatYearCount(countYearsSince(skill.since))];

    return details.filter(Boolean).join(separator);
};
