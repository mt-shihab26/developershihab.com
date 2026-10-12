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
                resume_title: "JS/TS",
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
                level: "Intermediate",
                icon: C,
            },
            {
                title: "Go",
                href: "https://go.dev",
                level: "Basic",
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
                title: "Inertia.js",
                href: "https://inertiajs.com/",
                years: 3,
                level: "Advanced",
                icon: InertiaIcon,
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
                title: "PocketBase",
                href: "https://pocketbase.io",
                level: "Basic",
                icon: PocketBaseIcon,
            },
            {
                title: "raylib",
                href: "https://www.raylib.com",
                level: "Basic",
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
            // {
            //     title: "Redis",
            //     href: "https://redis.io/",
            //     icon: Redis,
            // },
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
                level: "Basic",
            },
            {
                title: "Claude Code",
                href: "https://claude.ai/code",
                level: "Basic",
                icon: ClaudeAI,
                resume_disable: true,
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
                level: "Basic",
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
