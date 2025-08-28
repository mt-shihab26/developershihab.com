import { markdownToHtml } from "@/lib/utils";

import { experiences } from "@/lib/experiences";

import { Code2 } from "lucide-react";
import { Heading } from "./heading";

export const Experience = () => {
    return (
        <section className="space-y-3">
            <Heading>Experience</Heading>
            {experiences.map((e, index) => (
                <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <span className="size-1.5 rounded-full bg-gray-600 dark:bg-gray-400" />
                        <a
                            href={e.company.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold hover:underline"
                        >
                            {e.company.label}
                        </a>
                    </div>
                    <div className="relative space-y-3 pl-1 before:absolute before:left-2.5 before:h-full before:w-px before:bg-gray-300 dark:before:bg-gray-600">
                        {e.positions.map((position, positionIndex) => (
                            <div key={positionIndex} className="space-y-2">
                                <div className="relative z-10 flex items-center space-x-3">
                                    <Code2 className="h-4 w-4 bg-white dark:bg-black" />
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {position.title}
                                    </h3>
                                </div>
                                <div className="pl-4 text-xs text-gray-700 dark:text-white">{position.year}</div>
                                <ul className="ml-8 list-disc space-y-0.5 text-xs text-gray-800 dark:text-white">
                                    {position.description.map((desc, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: markdownToHtml(desc) }}></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};
