import { markdownToHtml } from "@/lib/utils";

import { educations } from "@/lib/educations";
import { skills } from "@/lib/skills";

import { Projects } from "./projects";

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
                <div className="space-y-4">
                    {skills.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{category.label}</h4>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
                                        {skill.icon && <skill.icon className="w-3 h-3" />}
                                        <span className="text-xs font-medium">{skill.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
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
