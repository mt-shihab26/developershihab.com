import { experiences } from "@/lib/experiences";
import { formatDuration, markdownToHtml } from "@/lib/utils";

import { BriefcaseBusinessIcon } from "lucide-react";
import { Heading } from "./heading";

export const Experience = () => {
    return (
        <section className="space-y-3">
            <Heading>Experience</Heading>

            {experiences.map((e, index) => (
                <div
                    key={index}
                    className="space-y-2 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700"
                >
                    <div className="flex items-center space-x-3">
                        <span className="h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-400" />

                        <a
                            href={e.company.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-gray-900 underline dark:text-white"
                        >
                            {e.company.label}
                        </a>
                    </div>

                    <div className="relative space-y-2 pl-1 before:absolute before:left-3 before:inset-y-2 before:w-px before:bg-gray-200 dark:before:bg-gray-700">
                        {e.positions.map((position, positionIndex) => (
                            <div key={positionIndex} className="space-y-1.5">
                                <div className="relative z-10 flex items-center space-x-3">
                                    <BriefcaseBusinessIcon className="h-4 w-4 bg-white text-gray-500 dark:bg-black dark:text-gray-400" />

                                    <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
                                        {position.title}
                                    </h3>
                                </div>

                                <span className="block pl-7 text-xs text-gray-700 dark:text-gray-300">
                                    {position.year}

                                    <span className="text-gray-500 dark:text-gray-400">
                                        · {formatDuration(position.year)}
                                    </span>
                                </span>

                                <ul className="ml-7 list-disc space-y-0.5 text-xs text-gray-700 dark:text-gray-300">
                                    {position.description.map((desc, i) => (
                                        <li
                                            key={i}
                                            dangerouslySetInnerHTML={{
                                                __html: markdownToHtml(desc),
                                            }}
                                        />
                                    ))}
                                </ul>

                                {position.skills.length > 0 && (
                                    <div className="ml-7 text-[11px] text-gray-500 dark:text-gray-400">
                                        {position.skills.join(", ")}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};
