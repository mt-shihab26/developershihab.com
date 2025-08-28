import type { ReactNode } from "react";

import { cn, markdownToHtml } from "@/lib/utils";

import { educations } from "@/lib/educations";
import { experiences } from "@/lib/experiences";
import { avatar } from "@/lib/files";
import { bio, email, github, linkedin, location, name, phone, website } from "@/lib/information";

import { projects } from "./projects";
import { skills } from "./skills";

import { Summery } from "@/lib/information2";
import { GitHubDark, GitHubLight, LinkedIn } from "developer-icons";
import { Code2, Globe } from "lucide-react";

const Heading = ({ children }: { children: ReactNode }) => (
    <h2 className="border-b pb-1 text-sm font-bold text-blue-600 uppercase dark:text-blue-500">{children}</h2>
);

export const Resume = ({ image }: { image?: boolean }) => {
    return (
        <div className="mx-auto w-full space-y-4 bg-white p-6 text-xs leading-5 text-gray-900 dark:bg-black dark:text-white">
            <header
                className={cn("flex gap-3", {
                    "flex-col items-center text-center": !image,
                    "items-center": image,
                })}
            >
                {image && (
                    <div className="h-20 w-20 overflow-hidden rounded-full">
                        <img src={avatar.src} alt="Profile" className="h-full w-full object-cover" />
                    </div>
                )}

                <div className={cn("space-y-1", { "text-center": !image })}>
                    <h1 className="text-xl font-bold text-gray-900 uppercase dark:text-white">{name}</h1>
                    <div
                        className={cn("flex flex-wrap items-center gap-1 text-xs text-gray-700 dark:text-white", {
                            "justify-center": !image,
                        })}
                    >
                        <span>{bio}</span>
                        <span className="mx-1">•</span>
                        <span>{location}</span>
                        <span className="mx-1">•</span>
                        <span>{phone}</span>
                    </div>
                    <div
                        className={cn("flex flex-wrap items-center gap-3 text-blue-600 dark:text-blue-500", {
                            "justify-center": !image,
                        })}
                    >
                        <a
                            href={`mailto:${email}`}
                            className="text-xs hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {email}
                        </a>
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs hover:text-blue-700 hover:underline dark:hover:text-blue-400"
                        >
                            <Globe className="h-3 w-3" />
                            <span>{website.replace(/^https?:\/\//, "")}</span>
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs hover:text-blue-700 hover:underline dark:hover:text-blue-400"
                        >
                            <GitHubDark className="h-3 w-3 dark:hidden" />
                            <GitHubLight className="hidden h-3 w-3 dark:block" />
                            <span>{github.split("github.com/")[1]}</span>
                        </a>
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs hover:text-blue-700 hover:underline dark:hover:text-blue-400"
                        >
                            <LinkedIn className="h-3 w-3" />
                            <span>{linkedin.split("linkedin.com/in/")[1]}</span>
                        </a>
                    </div>
                </div>
            </header>

            <section className="space-y-2">
                <Heading>Summary</Heading>
                <p className="leading-relaxed text-gray-800 dark:text-white">
                    <Summery />
                </p>
            </section>

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
                                className="text-sm font-bold text-blue-600 hover:underline dark:text-blue-500"
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
