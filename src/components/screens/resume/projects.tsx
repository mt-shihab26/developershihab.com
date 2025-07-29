import { projects } from "~/config/projects";

import { Heading } from "./heading";

const resumeProjects = projects.filter((p) => p.resume);

export const Projects = () => {
    return (
        <section className="space-y-3 text-sm">
            <Heading>Open Source Work</Heading>
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
                                <a href={project.liveLink} className="text-blue-600 hover:underline" target="_blank">
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
    );
};
