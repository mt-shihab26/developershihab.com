import { contributions } from "@/lib/contributions";

import { GitPullRequestIcon } from "lucide-react";
import { Heading } from "./heading";

const grouped = Object.values(
    contributions.reduce<Record<string, { repo: string; repoUrl: string; prs: typeof contributions }>>((acc, c) => {
        if (!acc[c.repo]) acc[c.repo] = { repo: c.repo, repoUrl: c.repoUrl, prs: [] };
        acc[c.repo].prs.push(c);
        return acc;
    }, {}),
);

export const Contributions = () => {
    return (
        <section className="space-y-3">
            <Heading>Open Source Contributions</Heading>
            <div className="space-y-3">
                {grouped.map(({ repo, repoUrl, prs }) => (
                    <div key={repo} className="border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                            <span className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500" />
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white">{repo}</h3>
                        </div>
                        <div className="mb-1 flex items-center space-x-3 pl-1">
                            <GitPullRequestIcon className="h-4 w-4 text-transparent" />
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs underline text-gray-900 dark:text-white"
                            >
                                {repoUrl.split("//")[1]}
                            </a>
                        </div>
                        <div className="relative space-y-1 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-gray-200 dark:before:bg-gray-700">
                            {prs.map(contribution => (
                                <div key={contribution.pr} className="relative z-10">
                                    <div className="flex items-center space-x-3">
                                        <GitPullRequestIcon className="h-4 w-4 bg-white text-gray-400 dark:bg-black dark:text-gray-500" />
                                        <a
                                            href={contribution.prUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs underline text-gray-900 dark:text-white"
                                        >
                                            {contribution.pr}
                                        </a>
                                        <span className="text-xs text-gray-700 dark:text-gray-300">—  {contribution.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
