import { getProjectsRow } from "@/lib/projects";

import { Heading } from "./heading";

export const Projects = () => {
    const projects = (getProjectsRow() || []).filter(project => project.resume === true);

    return (
        <section className="space-y-3">
            <Heading>Projects</Heading>
            <div className="space-y-3">
                {projects.map((project, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
                        <div className="mb-2 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <span className="h-2 w-2 rounded-full bg-gray-600" />
                                {project.preview ? (
                                    <a
                                        href={project.preview || project.sourceCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-bold text-gray-900 hover:underline dark:text-white"
                                    >
                                        {project.name}
                                    </a>
                                ) : (
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{project.name}</h3>
                                )}
                            </div>
                            {project.sourceCode && (
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                >
                                    {project.sourceCode?.split("//")[1]}
                                </a>
                            )}
                        </div>
                        {project.technologies.length > 0 && (
                            <div className="mb-1 pl-6 text-xs text-gray-600 dark:text-gray-400">
                                ({project.technologies.join(", ")})
                            </div>
                        )}
                        <p className="pl-6 text-xs text-gray-800 dark:text-white">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
