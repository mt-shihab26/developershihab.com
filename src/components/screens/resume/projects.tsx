import type { TProject } from "@/types/content";

import { PROJECT_CATEGORIES, getResumeProjectsByCategory } from "@/lib/projects";

import { Code2 } from "lucide-react";
import { Heading } from "./heading";

const ProjectCard = ({ project }: { project: TProject }) => (
    <div className="space-y-2 border-b border-gray-200 pb-3 last:border-b-0 dark:border-gray-700">
        <div className="flex items-center space-x-3">
            <Code2 className="h-4 w-4" />
            <div className="flex items-center gap-1">
                <h3 className="font-bold">{project.name}</h3>
                {project.preview && (
                    <a href={project.preview} target="_blank" rel="noopener noreferrer" className="underline">
                        ({project.preview.split("//")[1]})
                    </a>
                )}
            </div>
        </div>
        <div className="relative space-y-1.5 pl-1 before:absolute before:inset-y-2 before:left-3 before:w-px before:bg-gray-200 dark:before:bg-gray-700">
            <div className="flex flex-col pl-7">
                {project.source && (
                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="underline">
                        {project.source.split("//")[1]}
                    </a>
                )}
            </div>

            <p className="pl-7">{project.description}</p>
            {project.technologies.length > 0 && <div className="pl-7">{project.technologies.join(" · ")}</div>}
        </div>
    </div>
);

const ProjectGroup = ({ title, projects }: { title: string; projects: TProject[] }) => {
    if (projects.length === 0) return null;
    return (
        <div className="space-y-3">
            <h3 className="font-semibold tracking-wide uppercase">{title}</h3>
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
