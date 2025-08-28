import { projects } from "./projects";

import { Heading } from "./heading";

export const Projects = () => {
    return (
        <section className="space-y-3">
            <Heading>Projects</Heading>
            <ul className="space-y-2 pl-1">
                {projects
                    .filter(p => p.resume)
                    .map((project, index) => (
                        <li key={index} className="space-y-0.5">
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
    );
};
