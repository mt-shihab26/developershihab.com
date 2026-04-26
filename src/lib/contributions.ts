type TPullRequest = {
    pr: string;
    prUrl: string;
    description: string;
};

export type TContributionGroup = {
    repo: string;
    repoUrl: string;
    prs: TPullRequest[];
};

export const contributions: TContributionGroup[] = [
    {
        repo: "laravel/ai",
        repoUrl: "https://github.com/laravel/ai",
        prs: [
            {
                pr: "#177",
                prUrl: "https://github.com/laravel/ai/pull/177",
                description: "Added make:agent-middleware artisan command",
            },
            {
                pr: "#234",
                prUrl: "https://github.com/laravel/ai/pull/234",
                description: "Fixed middleware stub naming conflict",
            },
        ],
    },
    {
        repo: "laravel/installer",
        repoUrl: "https://github.com/laravel/installer",
        prs: [
            {
                pr: "#460",
                prUrl: "https://github.com/laravel/installer/pull/460",
                description: "Replaced deprecated add() with addCommand() from Symfony Console",
            },
            {
                pr: "#469",
                prUrl: "https://github.com/laravel/installer/pull/469",
                description: "Fixed absolute path handling on Linux/Unix systems",
            },
        ],
    },
    {
        repo: "laravel/docs",
        repoUrl: "https://github.com/laravel/docs",
        prs: [
            {
                pr: "#11068",
                prUrl: "https://github.com/laravel/docs/pull/11068",
                description: "Added documentation for the make:agent-middleware artisan command",
            },
        ],
    },
    {
        repo: "laravel/breeze",
        repoUrl: "https://github.com/laravel/breeze",
        prs: [
            {
                pr: "#444",
                prUrl: "https://github.com/laravel/breeze/pull/444",
                description: "Removed unnecessary Tailwind config files on the API stack",
            },
        ],
    },
];
