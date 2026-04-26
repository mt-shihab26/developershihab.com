import type { TProject } from "@/types/content";

import { PROJECT_CATEGORIES, getResumeProjectsByCategory } from "@/lib/projects";

import { Code2 } from "lucide-react";
import { Heading } from "./heading";

const ProjectCard = ({ project }: { project: TProject }) => (
    <div className="border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
        <div className="flex items-center space-x-3">
            <span className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500" />
            <div className="flex items-center gap-1">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">{project.name}</h3>
                {project.preview && (
                    <div>
                        (
                        <a
                            href={project.preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-900 underline dark:text-white"
                        >
                            {project.preview.split("//")[1]}
                        </a>
                        )
                    </div>
                )}
            </div>
        </div>
        <div className="relative pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-gray-200 dark:before:bg-gray-700">
            <div className="relative z-10 flex items-center space-x-3">
                <Code2 className="h-4 w-4 bg-white text-gray-400 dark:bg-black dark:text-gray-500" />
                <div className="flex flex-col">
                    {project.source && (
                        <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-900 underline dark:text-white"
                        >
                            {project.source.split("//")[1]}
                        </a>
                    )}
                    {project.technologies.length > 0 && (
                        <div className="text-[10px] text-gray-900 dark:text-white">
                            {project.technologies.join(", ")}
                        </div>
                    )}
                    <p className="text-xs text-gray-700 dark:text-gray-300">{project.description}</p>
                </div>
            </div>
        </div>
    </div>
);

const ProjectGroup = ({ title, projects }: { title: string; projects: TProject[] }) => {
    if (projects.length === 0) return null;
    return (
        <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">{title}</h3>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export const Projects = () => {
    const { professional, openSource, personal } = getResumeProjectsByCategory();

    return (
        <section className="space-y-3">
            <Heading>Projects</Heading>
            <ProjectGroup title={PROJECT_CATEGORIES.professional} projects={professional} />
            <ProjectGroup title={PROJECT_CATEGORIES.personal} projects={personal} />
            <ProjectGroup title={PROJECT_CATEGORIES.openSource} projects={openSource} />
        </section>
    );
};
