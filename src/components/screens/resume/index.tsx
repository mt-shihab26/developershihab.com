import { markdownToHtml } from "@/lib/utils";

import { educations } from "@/lib/educations";

import { Projects } from "./projects";
import { skills } from "./skills";

import { Experience } from "./experience";
import { Header } from "./header";
import { Heading } from "./heading";
import { Summary } from "./summary";

export const Resume = ({ image }: { image?: boolean }) => {
    return (
        <div className="mx-auto w-full space-y-3 bg-white p-6 text-xs leading-5 text-gray-900 dark:bg-black dark:text-white">
            <Header image={image} />
            <Summary />
            <Experience />
            <Projects />

            <section className="space-y-3">
                <Heading>Skills</Heading>
                <ul className="space-y-1.5">
                    {skills.map((skill, i) => (
                        <li key={i} className="flex flex-wrap text-xs text-gray-800 dark:text-white">
                            <span className="pr-2 font-semibold text-gray-900 dark:text-white">{skill.title}:</span>
                            {skill.items.map((item, index) => (
                                <span key={index}>
                                    {index !== 0 && ","}{" "}
                                    <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>{" "}
                                    {item.duration && <span className="font-normal">({item?.duration})</span>}
                                </span>
                            ))}
                        </li>
                    ))}
                </ul>
            </section>

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
        </div>
    );
};
