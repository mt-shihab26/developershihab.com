import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { educations, experiences } from "./experiences";
import { projects } from "./projects";
import { certifications, skills } from "./skills";

import { avatar } from "@/lib/files";
import { bio, email, github, linkedin, location, name, phone, website } from "@/lib/information";

import { GitHubDark, GitHubLight, LinkedIn } from "developer-icons";
import { Globe } from "lucide-react";

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
                    Full-stack developer with over 3 years of hands-on experience building scalable web applications
                    using React, Laravel, and WordPress. I have a solid foundation in data structures and algorithms,
                    having solved more than 1100 problems across various platforms. I am passionate about writing clean,
                    efficient code and following modern development practices. Always eager to learn and adapt, I
                    continuously explore new technologies to deliver meaningful and maintainable solutions.
                </p>
            </section>

            <section className="space-y-2">
                <Heading>Work Experience</Heading>
                {experiences.map((e, index) => (
                    <div key={index} className="space-y-1">
                        <h3 className="text-sm">
                            <span className="font-semibold text-gray-900 dark:text-white">{e.company}</span> —{" "}
                            <span className="font-normal text-gray-700 italic dark:text-white">{e.role}</span>
                            {e.link && (
                                <a
                                    href={e.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-xs text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    [Link]
                                </a>
                            )}
                        </h3>
                        <div className="text-xs text-gray-700 dark:text-white">
                            {e.location} | {e.start} - {e.end}
                        </div>
                        <ul className="ml-5 list-disc space-y-1 text-xs text-gray-800 dark:text-white">
                            {e.highlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="space-y-2">
                <Heading>Key Projects</Heading>
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
                    <div key={index} className="text-xs text-gray-800 dark:text-white">
                        <div className="text-gray-900 dark:text-white">
                            <span className="font-semibold">{edu.institution}</span>
                            {edu.link && (
                                <a
                                    href={edu.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-xs text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    [Link]
                                </a>
                            )}
                        </div>
                        <div className="text-xs">
                            {edu.location} — {edu.degree} <span className="italic">{edu.period}</span>
                        </div>
                    </div>
                ))}
            </section>

            <section className="space-y-2">
                <Heading>Certifications</Heading>
                <ul className="ml-5 list-disc space-y-1 text-xs text-gray-800 dark:text-white">
                    {certifications.map((cert, index) => (
                        <li key={index}>
                            <span>
                                <span className="font-medium text-gray-900 dark:text-white">{cert.name}</span> —{" "}
                                <span className="italic">{cert.date}</span>
                            </span>
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-blue-500 hover:underline dark:text-blue-500"
                                >
                                    [Link]
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};
