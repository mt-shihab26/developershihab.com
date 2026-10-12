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
    level?: "Advanced" | "Intermediate" | "Basic";
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
                level: "Advanced",
                icon: TypeScript,
                resume_title: "JavaScript/TypeScript",
            },
            {
                title: "JavaScript",
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                years: 4,
                level: "Advanced",
                icon: JavaScript,
                resume_disable: true,
            },
            {
                title: "PHP",
                href: "https://www.php.net",
                years: 3,
                level: "Advanced",
                icon: PHP,
            },
            {
                title: "C/C++",
                href: "https://www.c-language.org",
                years: 5,
                level: "Intermediate",
                icon: C,
            },
            {
                title: "Go",
                href: "https://go.dev",
                years: 2,
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
                years: 3,
                level: "Advanced",
                icon: React,
            },
            {
                title: "Laravel",
                href: "https://laravel.com",
                years: 3,
                level: "Advanced",
                icon: Laravel,
            },
            {
                title: "Node.js",
                href: "https://nodejs.org/",
                years: 4,
                level: "Intermediate",
                icon: NodeJs,
            },
            {
                title: "PocketBase",
                href: "https://pocketbase.io",
                years: 2,
                level: "Intermediate",
                icon: PocketBaseIcon,
            },
            {
                title: "WordPress",
                href: "https://wordpress.org",
                years: 3,
                level: "Advanced",
                icon: WordPress,
            },
            {
                title: "Inertia.js",
                href: "https://inertiajs.com/",
                years: 3,
                level: "Advanced",
                icon: InertiaIcon,
            },
            {
                title: "Vue.js",
                href: "https://vuejs.org",
                years: 1,
                level: "Basic",
                icon: VueJs,
            },
            {
                title: "TanStack",
                href: "https://tanstack.com",
                years: 0,
                level: "Basic",
                icon: TanStackIcon,
            },

            {
                title: "TailwindCSS",
                href: "https://tailwindcss.com/",
                years: 3,
                level: "Advanced",
                icon: TailwindCSS,
            },
            {
                title: "shadcn/ui",
                href: "https://ui.shadcn.com/",
                years: 2,
                level: "Advanced",
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
                level: "Intermediate",
                icon: MySQL,
            },
            {
                title: "Linux",
                href: "https://www.kernel.org",
                years: 4,
                level: "Intermediate",
                icon: Linux,
            },
            {
                title: "Git",
                href: "https://git-scm.com/",
                years: 4,
                level: "Intermediate",
                icon: Git,
            },
            {
                title: "Neovim",
                href: "https://neovim.io",
                years: 3,
                level: "Intermediate",
                icon: NeoVim,
            },
            {
                title: "Claude Code",
                href: "https://claude.ai/code",
                years: 1,
                level: "Intermediate",
                icon: ClaudeAI,
            },
            {
                title: "DigitalOcean",
                href: "https://digitalocean.com",
                years: 3,
                level: "Intermediate",
                icon: DigitalOcean,
            },
            {
                title: "OpenAI API",
                href: "https://platform.openai.com",
                years: 2,
                level: "Intermediate",
                icon: OpenAI,
            },
            {
                title: "Facebook API",
                href: "https://developers.facebook.com",
                years: 1,
                level: "Basic",
                icon: Facebook,
            },
        ],
    },
];
