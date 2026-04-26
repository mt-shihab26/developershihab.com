import { contributions } from "@/lib/contributions";

import { GitPullRequestIcon } from "lucide-react";
import { Heading } from "./heading";

export const Contributions = () => {
    return (
        <section className="space-y-3">
            <Heading>Open Source Contributions</Heading>
            <div className="space-y-3">
                {contributions.map(({ repo, repoUrl, prs }) => (
                    <div key={repo} className="border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                            <span className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500" />
                            <div className="flex items-center space-x-1">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white">{repo}</h3>(
                                <a
                                    href={repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-gray-900 underline dark:text-white"
                                >
                                    {repoUrl.split("//")[1]}
                                </a>
                                )
                            </div>
                        </div>
                        <div className="relative pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-gray-200 dark:before:bg-gray-700">
                            {prs.map(contribution => (
                                <div key={contribution.pr} className="relative z-10">
                                    <div className="flex space-x-3">
                                        <GitPullRequestIcon className="h-4 w-4 bg-white text-gray-400 dark:bg-black dark:text-gray-500" />
                                        <a
                                            href={contribution.prUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] text-gray-900 underline dark:text-white"
                                        >
                                            {contribution.pr}
                                        </a>
                                        <span className="text-[11px] text-gray-700 dark:text-gray-300">
                                            — {contribution.description}
                                        </span>
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
