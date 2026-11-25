import type { TContributionGroup } from "@/types/content";

export const contributions: TContributionGroup[] = [
    {
        repo: "laravel/ai",
        repo_url: "https://github.com/laravel/ai",
        prs: [
            {
                pr: "#177",
                pr_url: "https://github.com/laravel/ai/pull/177",
                description: "Added make:agent-middleware artisan command",
            },
            {
                pr: "#234",
                pr_url: "https://github.com/laravel/ai/pull/234",
                description: "Fixed middleware stub naming conflict",
            },
        ],
    },
    {
        repo: "laravel/installer",
        repo_url: "https://github.com/laravel/installer",
        prs: [
            {
                pr: "#460",
                pr_url: "https://github.com/laravel/installer/pull/460",
                description: "Replaced deprecated add() with addCommand() from Symfony Console",
            },
            {
                pr: "#469",
                pr_url: "https://github.com/laravel/installer/pull/469",
                description: "Fixed absolute path handling on Linux/Unix systems",
            },
        ],
    },
    {
        repo: "laravel/docs",
        repo_url: "https://github.com/laravel/docs",
        prs: [
            {
                pr: "#11068",
                pr_url: "https://github.com/laravel/docs/pull/11068",
                description: "Added documentation for the make:agent-middleware artisan command",
            },
        ],
    },
    {
        repo: "laravel/breeze",
        repo_url: "https://github.com/laravel/breeze",
        prs: [
            {
                pr: "#444",
                pr_url: "https://github.com/laravel/breeze/pull/444",
                description: "Removed unnecessary Tailwind config files on the API stack",
            },
        ],
    },
];
