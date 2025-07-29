import type { ReactNode } from "react";

import { educations, experiences } from "~/config/experiences";
import { links, name } from "~/config/personal";
import { projects } from "~/config/projects";
import { certifications, skills } from "~/config/skills";

import { Fragment } from "react";

const Seperator = () => {
    return <span className="mx-2">•</span>;
};

const Seperator2 = () => {
    return <span className="mx-1 text-black">•</span>;
};

const Heading = ({ children }: { children: ReactNode }) => {
    return <h2 className="border-b pb-1 font-bold text-blue-600 uppercase">{children}</h2>;
};

const resumeProjects = projects.filter((p) => p.resume);

export const Resume = ({ image }: { image?: boolean }) => {
    return (
        <div className="mx-auto w-full space-y-4 bg-white p-8 text-sm leading-5">
            <header className="w-full items-center space-y-1 text-sm">
                {image && (
                    <div className="flex flex-col items-center justify-center">
                        <img src="https://avatars.githubusercontent.com/u/67628903?v=4" className="h-40" />
                    </div>
                )}
                <h1 className="text-center text-4xl font-bold">{name}</h1>
                <div className="text-center">
                    <span>Dhaka, Bangladesh</span>
                    <Seperator />
                    <span>{links.phone}</span>
                    <Seperator />
                    <a href={`mailto:${links.email}`} target="_blank">
                        {links.email}
                    </a>
                </div>
                <div className="text-center">
                    <a href={links.website} target="_blank">
                        website
                    </a>
                    <Seperator />
                    <a href={links.github} target="_blank">
                        github
                    </a>
                    <Seperator />
                    <a href={links.linkedin} target="_blank">
                        linkedin
                    </a>
                </div>
            </header>

            <div className="space-y-4">
                <section className="space-y-3 text-sm">
                    <Heading>SUMMARY</Heading>
                    <div className="space-y-2">
                        {[
                            <>
                                Full-stack developer with 3+ years of experience. Specializing in React, Laravel, and
                                WordPress applications with proven expertise in building and scaling SaaS products.
                            </>,
                            <>
                                Strong foundation in data structures and algorithms (1100+ competitive programming
                                problems solved)
                            </>,
                            <>
                                Passionate about creating clean, maintainable code that delivers meaningful business
                                outcomes. Open to learning new technologies.
                            </>
                        ].map((paragraph, index) => (
                            <Fragment key={index}>{paragraph} </Fragment>
                        ))}
                    </div>
                </section>

                <section className="space-y-3 text-sm">
                    <Heading>Work Experience</Heading>
                    {experiences.map((e, index) => (
                        <div key={index} className="space-y-2">
                            <div>
                                <h3>
                                    <span className="text-base font-bold">{e.company}</span> — <em>{e.role}</em>
                                </h3>
                                <div className="text-gray-600">
                                    <span>{e.location}</span>, {e.start} - {e.end}
                                </div>
                            </div>
                            <div className="text-xs">
                                <ul className="ml-6 list-disc">
                                    {e.highlights.map((r, i) => (
                                        <li key={i}>{r}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="space-y-3 text-sm">
                    <Heading>Key Projects</Heading>
                    <ul className="space-y-2">
                        {resumeProjects.map((project, index) => (
                            <li key={index}>
                                <div className="flex items-center space-x-2">
                                    <div className="text-base font-semibold">{project.name}</div>
                                    <div className="flex space-x-1 text-gray-600">
                                        <div className="flex space-x-1">
                                            (
                                            {project.technologies.map((t, i) => (
                                                <div key={i}>
                                                    {t}
                                                    {i !== project.technologies.length - 1 && ", "}
                                                </div>
                                            ))}
                                            )
                                        </div>
                                        <a
                                            href={project.liveLink}
                                            className="text-blue-600 hover:underline"
                                            target="_blank"
                                        >
                                            [Link]
                                        </a>{" "}
                                        :{" "}
                                    </div>
                                </div>
                                <div className="text-xs">{project.description}</div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="space-y-1 text-sm">
                    <Heading>SKILLS</Heading>
                    {skills.map((skill) => (
                        <div className="flex items-center space-x-1">
                            <h3 className="font-medium">{skill.title}: </h3>
                            <ul className="flex items-center text-xs text-gray-600">
                                {skill.items.map((item, index) => (
                                    <Fragment key={index}>
                                        {index !== 0 && <Seperator2 />}
                                        <li>{item.name}</li>
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section className="space-y-3 text-sm">
                    <Heading>Education</Heading>
                    {educations.map((edu, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs">
                            <div className="text-sm font-semibold">{edu.institution} | </div>
                            <div>{edu.location} | </div>
                            <div>{edu.degree} | </div>
                            <div>{edu.period}</div>
                        </div>
                    ))}
                </section>

                <section className="space-y-3">
                    <Heading>Certification</Heading>
                    <ul className="text-xs">
                        {certifications.map((cert, index) => (
                            <li key={index} className="mb-1">
                                {cert.name} on {cert.date}
                                {cert.link && (
                                    <a target="_blank" href={cert.link} className="ml-1 text-blue-600 hover:underline">
                                        [Link]
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};
