import { getProjects } from "@/lib/projects";

import { ChevronRightIcon, FolderCodeIcon } from "lucide-react";
import { Heading } from "./heading";

export const Projects = () => {
    const projects = getProjects() || [];

    return (
        <section className="space-y-3">
            <Heading>Projects</Heading>
            <div className="space-y-0">
                {projects.map((project, index) => (
                    <div
                        key={project.slug}
                        className={`flex cursor-pointer items-center ${index !== projects.length - 1 ? "border-b" : ""}`}
                    >
                        <FolderCodeIcon className="mx-4.5 size-5 shrink-0 text-muted-foreground" />

                        <div className="group flex w-full cursor-pointer flex-col gap-y-3 border-l p-4">
                            <div className="flex w-full items-center justify-between text-left select-none">
                                <h3 className="text-lg font-semibold underline-offset-6 group-hover:underline">
                                    {project.name}
                                </h3>

                                <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:translate-x-1" />
                            </div>

                            <p className="text-xs leading-5 font-medium md:text-sm">{project.description}</p>

                            {project.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.map((technology, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
