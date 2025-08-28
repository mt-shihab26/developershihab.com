import { getProjectsRow } from "@/lib/projects";

import { Heading } from "./heading";

export const Projects = () => {
    const projects = (getProjectsRow() || []).filter(project => project.resume === true);

    return (
        <section className="space-y-3">
            <Heading>Projects</Heading>
            {projects.map((project, index) => (
                <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <span className="size-1.5 rounded-full bg-gray-600 dark:bg-gray-400" />
                        {project.preview || project.sourceCode ? (
                            <a
                                href={project.preview || project.sourceCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold underline-offset-6 hover:underline"
                            >
                                {project.name}
                            </a>
                        ) : (
                            <h3 className="text-sm font-semibold underline-offset-6">{project.name}</h3>
                        )}
                        {project.technologies.length > 0 && (
                            <>
                                (
                                <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.map((technology, techIndex) => (
                                        <span key={techIndex}>{technology}</span>
                                    ))}
                                </div>
                                )
                            </>
                        )}
                    </div>
                    <p className="pl-4 text-xs">{project.description}</p>
                </div>
            ))}
        </section>
    );
};
