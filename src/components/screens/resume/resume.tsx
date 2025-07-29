import type { ReactNode } from "react";

import { educations, experiences } from "~/config/experiences";
import { avatar, bio, links, location, name } from "~/config/personal";
import { projects } from "~/config/projects";
import { certifications, skills } from "~/config/skills";

import { Github, Globe, Linkedin } from "lucide-react";
import { Fragment } from "react";
import { cn } from "~/lib/utils";

const Seperator = () => <span className="mx-2">•</span>;

const Heading = ({ children }: { children: ReactNode }) => (
    <h2 className="border-b pb-1 font-bold text-blue-600 uppercase">{children}</h2>
);

const resumeProjects = projects.filter((p) => p.resume);

export const Resume = ({ image }: { image?: boolean }) => {
    return (
        <div className="mx-auto w-full max-w-4xl space-y-6 bg-white p-8 text-sm leading-6 text-gray-600">
            <header
                className={cn("flex gap-4", {
                    "flex-col items-center text-center": !image,
                    "items-center": image
                })}
            >
                {image && (
                    <div className="size-26 overflow-hidden rounded-full">
                        <img src={avatar} alt="Profile" className="h-full w-full object-cover" />
                    </div>
                )}

                <div className={cn("space-y-2", { "text-center": !image })}>
                    <h1 className="text-3xl font-bold text-black uppercase">{name}</h1>

                    <div
                        className={cn("flex flex-wrap items-center gap-2 text-sm text-gray-700", {
                            "justify-center": !image
                        })}
                    >
                        <span>{bio}</span>
                        <span className="mx-1">•</span>
                        <span>{location}</span>
                        <span className="mx-1">•</span>
                        <span>{links.phone}</span>
                    </div>

                    <div
                        className={cn("flex flex-wrap items-center gap-4 text-blue-600", {
                            "justify-center": !image
                        })}
                    >
                        <a
                            href={`mailto:${links.email}`}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {links.email}
                        </a>

                        <a
                            href={links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-blue-800"
                        >
                            <Globe className="h-4 w-4" />
                            <span>{links.website.replace(/^https?:\/\//, "")}</span>
                        </a>

                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-blue-800"
                        >
                            <Github className="h-4 w-4" />
                            <span>{links.github.split("github.com/")[1]}</span>
                        </a>

                        <a
                            href={links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-blue-800"
                        >
                            <Linkedin className="h-4 w-4" />
                            <span>{links.linkedin.split("linkedin.com/in/")[1]}</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Summary */}
            <section className="space-y-3">
                <Heading>Summary</Heading>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                    <li>
                        Full-stack developer with 3+ years' experience specializing in React, Laravel, and WordPress.
                    </li>
                    <li>Strong foundation in data structures and algorithms (1100+ problems solved).</li>
                    <li>Focused on writing clean, maintainable code. Always eager to learn new tech.</li>
                </ul>
            </section>

            {/* Experience */}
            <section className="space-y-3">
                <Heading>Work Experience</Heading>
                {experiences.map((e, index) => (
                    <div key={index} className="space-y-1">
                        <h3 className="text-base font-semibold">
                            {e.company} — <span className="font-normal italic">{e.role}</span>
                        </h3>
                        <div className="text-sm text-gray-600">
                            {e.location}, {e.start} - {e.end}
                        </div>
                        <ul className="ml-5 list-disc space-y-1 text-xs text-gray-700">
                            {e.highlights.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Projects */}
            <section className="space-y-3">
                <Heading>Key Projects</Heading>
                <ul className="space-y-3">
                    {resumeProjects.map((project, index) => (
                        <li key={index}>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">{project.name}</span>
                                <span className="text-sm text-gray-500">({project.technologies.join(", ")})</span>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        className="text-sm text-blue-600 hover:underline"
                                        target="_blank"
                                    >
                                        [Link]
                                    </a>
                                )}
                            </div>
                            <p className="mt-1 text-xs text-gray-700">{project.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Skills */}
            <section className="space-y-3">
                <Heading>Skills</Heading>
                <ul className="space-y-2">
                    {skills.map((skill, i) => (
                        <li key={i} className="flex flex-wrap text-xs text-gray-700">
                            <span className="mr-2 font-medium">{skill.title}:</span>
                            {skill.items.map((item, index) => (
                                <Fragment key={index}>
                                    {index !== 0 && <Seperator />}
                                    <span>{item.name}</span>
                                </Fragment>
                            ))}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Education */}
            <section className="space-y-3">
                <Heading>Education</Heading>
                {educations.map((edu, index) => (
                    <div key={index} className="text-sm text-gray-700">
                        <div className="font-semibold">{edu.institution}</div>
                        <div className="text-xs">
                            {edu.location} — {edu.degree} ({edu.period})
                        </div>
                    </div>
                ))}
            </section>

            {/* Certifications */}
            <section className="space-y-3">
                <Heading>Certifications</Heading>
                <ul className="ml-5 list-disc space-y-1 text-xs text-gray-700">
                    {certifications.map((cert, index) => (
                        <li key={index}>
                            {cert.name} on {cert.date}
                            {cert.link && (
                                <a href={cert.link} className="ml-1 text-blue-600 hover:underline" target="_blank">
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
