import { educations } from "@/lib/educations";
import { markdownToHtml } from "@/lib/utils";

import { GraduationCap } from "lucide-react";
import { Heading } from "./heading";

export const Education = () => {
    return (
        <section className="space-y-3">
            <Heading>Education</Heading>
            {educations.map((edu, index) => (
                <div
                    key={index}
                    className="space-y-4 border-b border-gray-200 pb-4 last:border-b-0 dark:border-gray-700"
                >
                    <div className="flex items-center space-x-4">
                        <span className="h-2 w-2 rounded-full bg-gray-600" />
                        <a
                            href={edu.institution.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-gray-900 hover:underline dark:text-white"
                        >
                            {edu.institution.label}
                        </a>
                    </div>
                    <div className="relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-gray-300 dark:before:bg-gray-600">
                        {edu.positions.map((position, positionIndex) => (
                            <div key={positionIndex}>
                                <div className="relative z-10 mb-1 flex items-center space-x-3">
                                    <GraduationCap className="h-4 w-4 bg-white dark:bg-black" />
                                    <h3 className="text-xs font-bold">{position.title}</h3>
                                </div>
                                <span className="block pl-7 text-xs text-gray-600 dark:text-gray-400">
                                    {position.year}
                                </span>
                                <ul className="mt-2 ml-7 list-disc space-y-0.5 text-xs text-gray-800 dark:text-white">
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
