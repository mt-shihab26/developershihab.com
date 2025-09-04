import { getProjectsRow } from "@/lib/projects";

import { Code2 } from "lucide-react";
import { Fragment } from "react";
import { Heading } from "./heading";

export const Projects = () => {
    const projects = (getProjectsRow() || []).filter(project => project.resume === true);

    return (
        <section className="space-y-3">
            <Heading>Projects</Heading>
            <div className="space-y-3">
                {projects.map((project, index) => (
                    <Fragment key={index}>
                        {index === 2 && <div className="print:[page-break-before:always]"></div>}
                        <div className="border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
                            <div className="flex items-center space-x-3">
                                <span className="h-2 w-2 rounded-full bg-gray-600" />
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white">{project.name}</h3>
                            </div>
                            <div className="relative space-y-1 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-gray-300 dark:before:bg-gray-600">
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Code2 className="h-4 w-4 bg-white dark:bg-black" />
                                        {project.preview && (
                                            <a
                                                href={project.preview}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs"
                                            >
                                                {project.preview?.split("//")[1]}
                                            </a>
                                        )}
                                        {project.source && (
                                            <a
                                                href={project.source}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs"
                                            >
                                                {project.source?.split("//")[1]}
                                            </a>
                                        )}
                                    </div>
                                </div>
                                {project.technologies.length > 0 && (
                                    <div className="mb-1 pl-7 text-xs text-gray-600 dark:text-gray-400">
                                        ({project.technologies.join(", ")})
                                    </div>
                                )}
                                <p className="pl-7 text-xs text-gray-800 dark:text-white">{project.description}</p>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </section>
    );
};
