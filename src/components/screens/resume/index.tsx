import { markdownToHtml } from "@/lib/utils";

import { educations } from "@/lib/educations";
import { experiences } from "@/lib/experiences";

import { projects } from "./projects";
import { skills } from "./skills";

import { Code2 } from "lucide-react";
import { Header } from "./header";
import { Heading } from "./heading";
import { Summary } from "./summary";

export const Resume = ({ image }: { image?: boolean }) => {
    return (
        <div className="mx-auto w-full space-y-4 bg-white p-6 text-xs leading-5 text-gray-900 dark:bg-black dark:text-white">
            <Header image={image} />
            <Summary />

            <section className="space-y-2">
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
                        <div className="relative space-y-2 pl-1 before:absolute before:left-2.5 before:h-full before:w-px before:bg-gray-300 dark:before:bg-gray-600">
                            {e.positions.map((position, positionIndex) => (
                                <div key={positionIndex} className="space-y-1">
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <Code2 className="size-3" />
                                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                            {position.title}
                                        </h3>
                                    </div>
                                    <div className="pl-4 text-xs text-gray-700 dark:text-white">{position.year}</div>
                                    <ul className="ml-8 list-disc space-y-1 text-xs text-gray-800 dark:text-white">
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

            <section className="space-y-2">
                <Heading>Projects</Heading>
                <ul className="space-y-1">
                    {projects
                        .filter(p => p.resume)
                        .map((project, index) => (
                            <li key={index} className="space-y-1">
                                <div className="flex items-center space-x-1">
                                    <span className="font-semibold text-gray-900 dark:text-white">{project.name}</span>
                                    <span className="text-xs text-gray-700 dark:text-white">
                                        ({project.technologies.join(", ")})
                                    </span>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-1 text-xs text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            [Link]
                                        </a>
                                    )}
                                </div>
                                <p className="text-xs text-gray-800 dark:text-white">{project.description}</p>
                            </li>
                        ))}
                </ul>
            </section>

            <section className="space-y-2">
                <Heading>Skills</Heading>
                <ul className="space-y-1">
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

            <section className="space-y-2">
                <Heading>Education</Heading>
                {educations.map((edu, index) => (
                    <div key={index} className="space-y-2">
                        {edu.positions.map((position, positionIndex) => (
                            <div key={positionIndex} className="space-y-1">
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
                                <ul className="ml-5 list-disc space-y-1 text-xs text-gray-800 dark:text-white">
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
