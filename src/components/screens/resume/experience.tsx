import { experiences } from "@/lib/experiences";
import { markdownToHtml } from "@/lib/utils";

import { BriefcaseBusinessIcon } from "lucide-react";
import { Heading } from "./heading";

const formatDuration = (yearString: string): string => {
    const [startStr, endStr] = yearString.split(" – ");
    const start = new Date(`${startStr} 1`);
    const end = endStr === "Present" ? new Date() : new Date(`${endStr} 1`);
    const totalMonths =
        (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    if (years === 0) return `${months} mo`;
    if (months === 0) return `${years} yr`;
    return `${years} yr ${months} mo`;
};

export const Experience = () => {
    return (
        <section className="space-y-3">
            <Heading>Experience</Heading>
            {experiences.map((e, index) => (
                <div
                    key={index}
                    className="space-y-3 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700"
                >
                    <div className="flex items-center space-x-3">
                        <span className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500" />
                        <a
                            href={e.company.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-gray-900 hover:underline dark:text-white"
                        >
                            {e.company.label}
                        </a>
                    </div>
                    <div className="relative space-y-3 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-gray-200 dark:before:bg-gray-700">
                        {e.positions.map((position, positionIndex) => (
                            <div key={positionIndex}>
                                <div className="relative z-10 mb-1 flex items-center space-x-3">
                                    <BriefcaseBusinessIcon className="h-4 w-4 bg-white text-gray-400 dark:bg-black dark:text-gray-500" />
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                                        {position.title}
                                    </h3>
                                </div>
                                <span className="block pl-7 text-xs text-gray-900 dark:text-white">
                                    {position.year}
                                    <span className="ml-1.5 text-gray-500 dark:text-gray-400">
                                        · {formatDuration(position.year)}
                                    </span>
                                </span>
                                <ul className="mt-1 ml-7 list-disc space-y-0.5 text-xs text-gray-700 dark:text-gray-300">
                                    {position.description.map((desc, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: markdownToHtml(desc) }}></li>
                                    ))}
                                </ul>
                                {position.skills.length > 0 && (
                                    <div className="mt-1.5 ml-7 flex flex-wrap gap-x-2 gap-y-0.5">
                                        {position.skills.map(skill => (
                                            <span key={skill} className="text-[10px] text-gray-900 dark:text-white">
                                                {skill}
                                            </span>
                                        ))}
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
