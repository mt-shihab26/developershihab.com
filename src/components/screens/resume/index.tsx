import type { ReactNode } from "react";

import { educations, experiences } from "~/config/experiences";
import { avatar, bio, links, location, name } from "~/config/personal";
import { projects } from "~/config/projects";
import { certifications, skills } from "~/config/skills";
import { cn } from "~/lib/utils";

import { Github, Globe, Linkedin } from "lucide-react";

const Heading = ({ children }: { children: ReactNode }) => (
    <h2 className="border-b pb-1 font-bold text-blue-500 uppercase">{children}</h2>
);

export const Resume = ({ image }: { image?: boolean }) => {
    return (
        <div className="mx-auto w-full max-w-4xl space-y-6 bg-white p-8 text-sm leading-6 text-gray-900">
            <header
                className={cn("flex gap-4", {
                    "flex-col items-center text-center": !image,
                    "items-center": image
                })}
            >
                {image && (
                    <div className="h-26 w-26 overflow-hidden rounded-full">
                        <img src={avatar} alt="Profile" className="h-full w-full object-cover" />
                    </div>
                )}

                <div className={cn("space-y-2", { "text-center": !image })}>
                    <h1 className="text-3xl font-bold text-black uppercase">{name}</h1>
                    <div
                        className={cn("flex flex-wrap items-center gap-2 text-sm text-gray-900", {
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
                        className={cn("flex flex-wrap items-center gap-4 text-blue-500", {
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
                            className="flex items-center gap-1 hover:text-blue-600"
                        >
                            <Globe className="h-4 w-4" />
                            <span>{links.website.replace(/^https?:\/\//, "")}</span>
                        </a>

                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-blue-600"
                        >
                            <Github className="h-4 w-4" />
                            <span>{links.github.split("github.com/")[1]}</span>
                        </a>

                        <a
                            href={links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-blue-600"
                        >
                            <Linkedin className="h-4 w-4" />
                            <span>{links.linkedin.split("linkedin.com/in/")[1]}</span>
                        </a>
                    </div>
                </div>
            </header>

            <section className="space-y-3">
                <Heading>Summary</Heading>
                <p className="leading-relaxed text-gray-900">
                    Full-stack developer with over 3 years of hands-on experience building scalable web applications
                    using React, Laravel, and WordPress. I have a solid foundation in data structures and algorithms,
                    having solved more than 1100 problems across various platforms. I am passionate about writing clean,
                    efficient code and following modern development practices. Always eager to learn and adapt, I
                    continuously explore new technologies to deliver meaningful and maintainable solutions.
                </p>
            </section>

            <section className="space-y-3">
                <Heading>Work Experience</Heading>
                {experiences.map((e, index) => (
                    <div key={index} className="space-y-1">
                        <h3 className="text-base">
                            <span className="font-semibold text-black">{e.company}</span> —{" "}
                            <span className="font-normal text-gray-900 italic">{e.role}</span>
                            {e.link && (
                                <a
                                    href={e.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-xs text-blue-500 hover:underline"
                                >
                                    [Link]
                                </a>
                            )}
                        </h3>
                        <div className="text-sm text-gray-900">
                            {e.location} | {e.start} - {e.end}
                        </div>
                        <ul className="ml-5 list-disc space-y-1 text-xs text-gray-800">
                            {e.highlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="space-y-3">
                <Heading>Key Projects</Heading>
                <ul className="space-y-2">
                    {projects
                        .filter((p) => p.resume)
                        .map((project, index) => (
                            <li key={index} className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-black">{project.name}</span>
                                    <span className="text-sm text-gray-900">({project.technologies.join(", ")})</span>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-1 text-xs text-blue-500 hover:underline"
                                        >
                                            [Link]
                                        </a>
                                    )}
                                </div>
                                <p className="text-xs text-gray-800">{project.description}</p>
                            </li>
                        ))}
                </ul>
            </section>

            <section className="space-y-3">
                <Heading>Skills</Heading>
                <ul className="space-y-2">
                    {skills.map((skill, i) => (
                        <li key={i} className="flex flex-wrap text-xs text-gray-900">
                            <span className="pr-2 font-semibold text-black">{skill.title}:</span>
                            {skill.items.map((item, index) => (
                                <span key={index}>
                                    {index !== 0 && ","} {item.name}
                                </span>
                            ))}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="space-y-3">
                <Heading>Education</Heading>
                {educations.map((edu, index) => (
                    <div key={index} className="text-sm text-gray-900">
                        <div className="text-black">
                            <span className="font-semibold">{edu.institution}</span>
                            {edu.link && (
                                <a
                                    href={edu.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-xs text-blue-500 hover:underline"
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

            <section className="space-y-3">
                <Heading>Certifications</Heading>
                <ul className="ml-5 list-disc space-y-1 text-xs text-gray-800">
                    {certifications.map((cert, index) => (
                        <li key={index}>
                            <span>
                                <span className="font-medium text-black">{cert.name}</span> —{" "}
                                <span className="italic">{cert.date}</span>
                            </span>
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-blue-500 hover:underline"
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
