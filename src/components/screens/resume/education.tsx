import { educations } from "@/content/educations";
import { formatDurationBetween, formatDateRange } from "@/lib/dates";
import { SEPARATOR, markdownToHtml } from "@/lib/utils";

import { Heading } from "./heading";

export const Education = () => {
    return (
        <section>
            <Heading>Education</Heading>
            <div className="space-y-2">
                {educations.map((edu, index) => (
                    <div key={index} className="border-b border-gray-200 pb-2 last:border-b-0 dark:border-gray-700">
                        <a
                            href={edu.institution.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block font-bold underline decoration-gray-400"
                        >
                            {edu.institution.label}
                        </a>
                        {edu.positions.map((position, i) => (
                            <div key={i} className="mt-0.5">
                                <p>{position.title}</p>
                                <p>
                                    {formatDateRange(position.startDate, position.endDate)}
                                    <span className="ml-1.5">
                                        {SEPARATOR} {formatDurationBetween(position.startDate, position.endDate)}
                                    </span>
                                </p>
                                {position.description && (
                                    <ul className="list-disc pl-3">
                                        {position.description.map((desc, j) => (
                                            <li key={j} dangerouslySetInnerHTML={{ __html: markdownToHtml(desc) }} />
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
