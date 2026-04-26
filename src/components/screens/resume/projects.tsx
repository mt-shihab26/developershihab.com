import type { TProject } from "@/types/content";

import { getProjectsRow } from "@/lib/projects";

import { Code2 } from "lucide-react";
import { Heading } from "./heading";

const ProjectCard = ({ project }: { project: TProject }) => (
    <div className="border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
        <div className="flex items-center space-x-3">
            <span className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500" />
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">{project.name}</h3>
        </div>
        <div className="relative space-y-1 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-gray-200 dark:before:bg-gray-700">
            <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Code2 className="h-4 w-4 bg-white text-gray-400 dark:bg-black dark:text-gray-500" />
                    <div className="flex flex-col">
                        {project.preview && (
                            <a
                                href={project.preview}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs underline"
                            >
                                {project.preview.split("//")[1]}
                            </a>
                        )}
                        {project.source && (
                            <a
                                href={project.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs underline"
                            >
                                {project.source.split("//")[1]}
                            </a>
                        )}
                    </div>
                </div>
            </div>
            {project.technologies.length > 0 && (
                <div className="mb-1 pl-7 text-xs text-gray-500 dark:text-gray-400">
                    {project.technologies.join(", ")}
                </div>
            )}
            <p className="pl-7 text-xs text-gray-700 dark:text-gray-300">{project.description}</p>
        </div>
    </div>
);

export const Projects = () => {
    const allProjects = (getProjectsRow() || []).filter(p => p.resume === true);
    const professionalProjects = allProjects.filter(p => p.type === "core");
    const openSourceProjects = allProjects.filter(p => p.type === "side" && p.source);
    const personalProjects = allProjects.filter(p => p.type === "side" && !p.source);

    return (
        <section className="space-y-3">
            <Heading>Projects</Heading>
            {clientProjects.length > 0 && (
                <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Client Projects
                    </h3>
                    {clientProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            )}
            {demoProjects.length > 0 && (
                <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Demo Projects
                    </h3>
                    {demoProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            )}
        </section>
    );
};
