import { educations } from "@/lib/educations";
import { formatDuration, markdownToHtml } from "@/lib/utils";

import { Heading } from "./heading";

export const Education = () => {
    return (
        <section className="space-y-3">
            <Heading>Education</Heading>
            <div className="space-y-3">
                {educations.map((edu, index) => (
                    <div key={index} className="space-y-1.5 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
                        <a
                            href={edu.institution.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block font-bold text-gray-900 underline dark:text-white"
                        >
                            {edu.institution.label}
                        </a>
                        {edu.positions.map((position, i) => (
                            <div key={i} className="space-y-0.5">
                                <p className="text-gray-700 dark:text-gray-300">{position.title}</p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {position.year}
                                    <span className="ml-1.5 text-gray-500 dark:text-gray-400">· {formatDuration(position.year)}</span>
                                </p>
                                {position.description && (
                                    <ul className="list-disc pl-3 space-y-0.5">
                                        {position.description.map((desc, j) => (
                                            <li key={j} className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: markdownToHtml(desc) }} />
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};
