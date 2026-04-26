import { contributions } from "@/lib/contributions";

import { GitPullRequestIcon } from "lucide-react";
import { Heading } from "./heading";

export const Contributions = () => {
    return (
        <section>
            <Heading>Contributions</Heading>
            <div className="space-y-2">
                {contributions.map(({ repo, repoUrl, prs }) => (
                    <div key={repo} className="border-b border-gray-200 pb-2 last:border-b-0 dark:border-gray-700">
                        <h3 className="font-bold">{repo}</h3>
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block underline decoration-gray-400"
                        >
                            {repoUrl.split("//")[1]}
                        </a>
                        <div className="mt-1 flex flex-wrap items-center gap-1">
                            <GitPullRequestIcon className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                            {prs.map(contribution => (
                                <a
                                    key={contribution.pr}
                                    href={contribution.prUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline decoration-gray-400"
                                >
                                    {contribution.pr}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
