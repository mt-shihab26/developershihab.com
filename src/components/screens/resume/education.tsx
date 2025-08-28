import { markdownToHtml } from "@/lib/utils";

import { educations } from "@/lib/educations";

import { Heading } from "./heading";

export const Education = () => {
    return (
        <section className="space-y-3">
            <Heading>Education</Heading>
            {educations.map((edu, index) => (
                <div key={index} className="space-y-2">
                    {edu.positions.map((position, positionIndex) => (
                        <div key={positionIndex} className="space-y-2">
                            <div className="text-xs text-gray-800 dark:text-white">
                                <div className="text-gray-900 dark:text-white">
                                    <span className="font-semibold">{edu.institution.label}</span>
                                    {edu.institution.link && (
                                        <a
                                            href={edu.institution.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-1 text-xs text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            [Link]
                                        </a>
                                    )}
                                </div>
                                <div className="text-xs">
                                    {position.title} <span className="italic">({position.year})</span>
                                </div>
                            </div>
                            <ul className="ml-5 list-disc space-y-0.5 text-xs text-gray-800 dark:text-white">
                                {position.description.map((desc, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: markdownToHtml(desc) }}></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
};
