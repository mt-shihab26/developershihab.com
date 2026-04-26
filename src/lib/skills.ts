import { InertiaIcon } from "@/components/icons/inertia-icon";
import { PocketBaseIcon } from "@/components/icons/pocketbase-icon";

import type { DeveloperIconProps } from "developer-icons/dist/icon";
import type { ReactElement } from "react";

import {
    C,
    ClaudeAI,
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

type SkillItem = {
    title: string;
    href: string;
    icon?: (props: DeveloperIconProps) => ReactElement;
    resume_title?: string;
    resume_disable?: boolean;
};

export const skills: { label: string; items: SkillItem[] }[] = [
    {
        label: "Languages",
        items: [
            {
                title: "PHP",
                href: "https://www.php.net",
                icon: PHP,
            },
            {
                title: "TypeScript",
                href: "https://www.typescriptlang.org",
                icon: TypeScript,
                resume_title: "JavaScript/TypeScript",
            },
            {
                title: "JavaScript",
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                icon: JavaScript,
                resume_disable: true,
            },
            {
                title: "Go",
                href: "https://go.dev",
                icon: Go,
            },
            {
                title: "C/C++",
                href: "https://www.c-language.org",
                icon: C,
            },
        ],
    },
    {
        label: "Frameworks",
        items: [
            {
                title: "Laravel",
                href: "https://laravel.com",
                icon: Laravel,
            },
            {
                title: "React",
                href: "https://react.dev",
                icon: React,
            },
            {
                title: "Inertia.js",
                href: "https://inertiajs.com/",
                icon: InertiaIcon,
            },
            {
                title: "TailwindCSS",
                href: "https://tailwindcss.com/",
                icon: TailwindCSS,
            },
            {
                title: "shadcn/ui",
                href: "https://ui.shadcn.com/",
                icon: ShadcnUI,
            },
            {
                title: "WordPress",
                href: "https://wordpress.org",
                icon: WordPress,
            },
            {
                title: "Vue.js",
                href: "https://vuejs.org",
                icon: VueJs,
            },
            {
                title: "PocketBase",
                href: "https://pocketbase.io",
                icon: PocketBaseIcon,
            },
            {
                title: "Node.js",
                href: "https://nodejs.org/",
                icon: NodeJs,
            },
        ],
    },
    {
        label: "Others",
        items: [
            // {
            //     title: "Redis",
            //     href: "https://redis.io/",
            //     icon: Redis,
            // },
            {
                title: "Linux",
                href: "https://www.kernel.org",
                icon: Linux,
            },
            {
                title: "Git",
                href: "https://git-scm.com/",
                icon: Git,
            },
            {
                title: "Neovim",
                href: "https://neovim.io",
                icon: NeoVim,
            },
            {
                title: "MySQL",
                href: "https://www.mysql.com",
                icon: MySQL,
            },
            // {
            //     title: "DigitalOcean",
            //     href: "https://digitalocean.com",
            //     icon: DigitalOcean,
            // },
            {
                title: "Claude Code",
                href: "https://claude.ai/code",
                icon: ClaudeAI,
            },
            {
                title: "OpenAI API",
                href: "https://platform.openai.com",
                icon: OpenAI,
            },
            {
                title: "Facebook API",
                href: "https://developers.facebook.com",
                icon: Facebook,
            },
        ],
    },
];
