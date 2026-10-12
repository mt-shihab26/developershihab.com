import { InertiaIcon } from "@/components/icons/inertia-icon";
import { PocketBaseIcon } from "@/components/icons/pocketbase-icon";
import { TanStackIcon } from "@/components/icons/tanstack-icon";

import type { DeveloperIconProps } from "developer-icons/dist/icon";
import type { ReactElement } from "react";

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

type SkillItem = {
    title: string;
    href: string;
    years?: number;
    icon?: (props: DeveloperIconProps) => ReactElement;
    resume_title?: string;
    resume_disable?: boolean;
};

export const skills: { label: string; items: SkillItem[] }[] = [
    {
        label: "Languages",
        items: [
            {
                title: "TypeScript",
                href: "https://www.typescriptlang.org",
                years: 4,
                icon: TypeScript,
                resume_title: "JavaScript/TypeScript",
            },
            {
                title: "JavaScript",
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                years: 4,
                icon: JavaScript,
                resume_disable: true,
            },
            {
                title: "PHP",
                href: "https://www.php.net",
                years: 3,
                icon: PHP,
            },
            {
                title: "C/C++",
                href: "https://www.c-language.org",
                years: 5,
                icon: C,
            },
            {
                title: "Go",
                href: "https://go.dev",
                years: 2,
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
                years: 3,
                icon: React,
            },
            {
                title: "Laravel",
                href: "https://laravel.com",
                years: 3,
                icon: Laravel,
            },
            {
                title: "Node.js",
                href: "https://nodejs.org/",
                years: 4,
                icon: NodeJs,
            },
            {
                title: "PocketBase",
                href: "https://pocketbase.io",
                years: 2,
                icon: PocketBaseIcon,
            },
            {
                title: "WordPress",
                href: "https://wordpress.org",
                years: 3,
                icon: WordPress,
            },
            {
                title: "Inertia.js",
                href: "https://inertiajs.com/",
                years: 3,
                icon: InertiaIcon,
            },
            {
                title: "Vue.js",
                href: "https://vuejs.org",
                years: 1,
                icon: VueJs,
            },
            {
                title: "TanStack",
                href: "https://tanstack.com",
                years: 0,
                icon: TanStackIcon,
            },

            {
                title: "TailwindCSS",
                href: "https://tailwindcss.com/",
                years: 3,
                icon: TailwindCSS,
            },
            {
                title: "shadcn/ui",
                href: "https://ui.shadcn.com/",
                years: 2,
                icon: ShadcnUI,
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
                title: "MySQL",
                href: "https://www.mysql.com",
                years: 3,
                icon: MySQL,
            },
            {
                title: "Linux",
                href: "https://www.kernel.org",
                years: 4,
                icon: Linux,
            },
            {
                title: "Git",
                href: "https://git-scm.com/",
                years: 4,
                icon: Git,
            },
            {
                title: "Neovim",
                href: "https://neovim.io",
                years: 3,
                icon: NeoVim,
            },
            {
                title: "Claude Code",
                href: "https://claude.ai/code",
                years: 1,
                icon: ClaudeAI,
            },
            {
                title: "DigitalOcean",
                href: "https://digitalocean.com",
                years: 3,
                icon: DigitalOcean,
            },
            {
                title: "OpenAI API",
                href: "https://platform.openai.com",
                years: 2,
                icon: OpenAI,
            },
            {
                title: "Facebook API",
                href: "https://developers.facebook.com",
                years: 1,
                icon: Facebook,
            },
        ],
    },
];
