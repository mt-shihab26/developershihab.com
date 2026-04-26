import { contributions } from "@/lib/contributions";

import { GitPullRequestIcon } from "lucide-react";
import { Heading } from "./heading";

export const Contributions = () => {
    return (
        <section className="space-y-3">
            <Heading>Contributions</Heading>
            <div className="space-y-3">
                {contributions.map(({ repo, repoUrl, prs }) => (
                    <div
                        key={repo}
                        className="space-y-1.5 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700"
                    >
                        <h3 className="font-bold">{repo}</h3>
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="block underline">
                            {repoUrl.split("//")[1]}
                        </a>
                        <div className="flex flex-wrap items-center gap-1">
                            <GitPullRequestIcon className="h-3 w-3" />
                            {prs.map(contribution => (
                                <a
                                    key={contribution.pr}
                                    href={contribution.prUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
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
