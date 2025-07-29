import { educations, experiences } from "~/config/experiences";
import { bio, description, links, name } from "~/config/personal";
import { projects } from "~/config/projects";
import { certifications, skills } from "~/config/skills";

import { GithubIcon, GlobeIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export const Resume = () => {
    return (
        <div className="mx-auto max-w-4xl bg-white p-8 font-sans text-gray-800">
            {/* Header */}
            <div className="mb-8 border-b-2 border-gray-800 pb-6">
                <h1 className="mb-2 text-4xl font-bold text-gray-900">{name}</h1>
                <p className="mb-4 text-xl text-gray-600">{bio}</p>
                <p className="mb-4 leading-relaxed text-gray-700">{description}</p>

                <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <MailIcon className="h-4 w-4" />
                        <span>{links.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <PhoneIcon className="h-4 w-4" />
                        <span>{links.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GlobeIcon className="h-4 w-4" />
                        <span>{links.website}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GithubIcon className="h-4 w-4" />
                        <span>{links.github}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LinkedinIcon className="h-4 w-4" />
                        <span>{links.linkedin}</span>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <section className="mb-8">
                <h2 className="mb-6 border-b border-gray-300 pb-2 text-2xl font-bold text-gray-900">
                    Professional Summary
                </h2>
                <div className="rounded-lg bg-gray-50 p-6">
                    <p className="text-base leading-relaxed text-gray-700">
                        Experienced full-stack developer with <strong>3+ years</strong> of expertise in building
                        scalable web applications and SaaS solutions. Specialized in{" "}
                        <strong>React, Laravel, and WordPress</strong> development with a proven track record of
                        architecting applications that serve <strong>3000+ users monthly</strong>. Led technical
                        decision-making for client projects, mentored junior developers, and successfully delivered
                        revenue-generating SaaS platforms. Passionate about clean code architecture, problem-solving,
                        and implementing modern development practices including CI/CD pipelines and cloud deployment
                        strategies.
                    </p>
                </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
                <h2 className="mb-6 border-b border-gray-300 pb-2 text-2xl font-bold text-gray-900">Experience</h2>
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-6">
                            <div className="mb-2 flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                                    <p className="font-medium text-blue-600">{exp.company}</p>
                                </div>
                                <div className="text-right text-sm text-gray-600">
                                    <p>
                                        {exp.start} - {exp.end}
                                    </p>
                                    <p>{exp.location}</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                {exp.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mt-2 mr-2 text-blue-500">•</span>
                                        <span className="leading-relaxed">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="mb-8">
                <h2 className="mb-6 border-b border-gray-300 pb-2 text-2xl font-bold text-gray-900">Education</h2>
                <div className="space-y-6">
                    {educations.map((edu, index) => (
                        <div key={index} className="border-l-4 border-green-500 pl-6">
                            <div className="mb-2 flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                                    <p className="font-medium text-green-600">{edu.institution}</p>
                                </div>
                                <div className="text-right text-sm text-gray-600">
                                    <p>{edu.period}</p>
                                    <p>{edu.location}</p>
                                </div>
                            </div>
                            <p className="leading-relaxed text-gray-700">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
                <h2 className="mb-6 border-b border-gray-300 pb-2 text-2xl font-bold text-gray-900">
                    Technical Skills
                </h2>
                <div className="space-y-6">
                    {skills.map((skillGroup, index) => (
                        <div key={index}>
                            <h3 className="mb-4 text-lg font-semibold text-gray-900">{skillGroup.title}</h3>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {skillGroup.items.map((skill, idx) => (
                                    <div key={idx} className="rounded-lg bg-gray-50 p-4">
                                        <div className="mb-2 flex items-center justify-between">
                                            <p className="font-semibold text-gray-900">{skill.name}</p>
                                            {skill.duration && (
                                                <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                                                    {skill.duration}
                                                </span>
                                            )}
                                        </div>
                                        {skill.description && (
                                            <p className="text-sm leading-relaxed text-gray-600">{skill.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
                <h2 className="mb-6 border-b border-gray-300 pb-2 text-2xl font-bold text-gray-900">Key Projects</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects
                        .filter((project) => project.resume)
                        .map((project, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-lg"
                            >
                                <div className="mb-3 flex items-start justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                                    <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 capitalize">
                                        {project.type === "oss" ? "Open Source" : project.type}
                                    </span>
                                </div>
                                <p className="mb-4 text-sm leading-relaxed text-gray-700">{project.description}</p>
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500">
                                    {project.startDate} {project.endDate && `- ${project.endDate}`}
                                </p>
                            </div>
                        ))}
                </div>
            </section>

            {/* Certifications */}
            <section>
                <h2 className="mb-6 border-b border-gray-300 pb-2 text-2xl font-bold text-gray-900">Certifications</h2>
                <div className="space-y-4">
                    {certifications.map((cert, index) => (
                        <div key={index} className="rounded-lg bg-gray-50 p-4">
                            <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">{cert.date}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
