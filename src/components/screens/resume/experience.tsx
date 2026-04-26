import { experiences } from "@/lib/experiences";
import { formatDuration, markdownToHtml } from "@/lib/utils";

import { BriefcaseBusinessIcon } from "lucide-react";
import { Heading } from "./heading";

export const Experience = () => {
    return (
        <section>
            <Heading>Experience</Heading>

            {experiences.map((e, index) => (
                <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
                    <div className="flex items-center">
                        <span className="size-2 rounded-full text-gray-800" />
                        <a
                            href={e.company.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline"
                        >
                            {e.company.label}
                        </a>
                    </div>

                    <div className="relative pl-1 before:absolute before:inset-y-2 before:left-3 before:w-px before:bg-gray-200 dark:before:bg-gray-700">
                        {e.positions.map((position, positionIndex) => (
                            <div key={positionIndex}>
                                <div className="relative z-10 flex items-center">
                                    <BriefcaseBusinessIcon className="h-4 w-4 bg-white text-gray-500 dark:bg-black dark:text-gray-400" />

                                    <h3 className="font-semibold">{position.title}</h3>
                                </div>

                                <span className="block pl-7">
                                    {position.year}

                                    <span>· {formatDuration(position.year)}</span>
                                </span>

                                <ul className="ml-7 list-disc">
                                    {position.description.map((desc, i) => (
                                        <li
                                            key={i}
                                            dangerouslySetInnerHTML={{
                                                __html: markdownToHtml(desc),
                                            }}
                                        />
                                    ))}
                                </ul>

                                {position.skills.length > 0 && <div className="ml-7">{position.skills.join(", ")}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};
