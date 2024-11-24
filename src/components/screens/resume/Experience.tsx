import type { TExperience } from "@/config/experiences";
import type { TProject } from "@/content/config";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import experiences from "@/config/experiences";

import Section from "./Section";

const ProjectItem = ({ project }: { project: TProject }) => (
    <li>
        <a
            href={`/projects/${project.slug}`}
            className="group block rounded-lg border border-border p-4 transition-all duration-200 hover:border-foreground/25 hover:shadow-sm"
        >
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                    <h3 className="font-medium group-hover:text-foreground">
                        {project.data.title}
                    </h3>
                    {project.data.technologies && (
                        <p className="text-sm text-muted-foreground">
                            {project.data.technologies.join(", ")}
                        </p>
                    )}
                </div>
                <Badge
                    variant="secondary"
                    className="shrink-0 text-xs transition-colors group-hover:bg-background"
                >
                    View Project →
                </Badge>
            </div>
        </a>
    </li>
);
const Item = ({
    experience,
    allProjects
}: {
    experience: TExperience;
    allProjects: TProject[];
}) => {
    const { firm, roles } = experience;

    return (
        <Card>
            <CardContent className="space-y-2 p-0">
                {roles.map((role, index) => {
                    const relevantProjects = role.projects
                        .map((slug) => allProjects.find((p) => p.slug === slug))
                        .filter((project): project is TProject => Boolean(project));
                    return (
                        <div className="relative">
                            {firm.logo && (
                                <img
                                    src={firm.logo.src}
                                    alt={firm.alt || ""}
                                    className="mb-3 h-12 w-auto lg:absolute lg:-left-16 lg:top-3.5 lg:mb-0"
                                />
                            )}
                            {index !== 0 && <Separator />}
                            <div key={index} className="flex flex-col gap-y-1.5 p-5">
                                <div className="flex flex-col gap-y-0.5">
                                    <h1 className="flex flex-col text-lg font-medium text-foreground lg:flex-row lg:space-x-0.5">
                                        <span>{role.position}</span>
                                        <span>
                                            @
                                            <a
                                                href={firm.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                {firm.name}
                                            </a>
                                        </span>
                                    </h1>
                                    <time>{role.date}</time>
                                    <p className="text-muted-foreground">{role.description}</p>
                                    {relevantProjects.length > 0 && (
                                        <ul className="mt-3 space-y-2">
                                            {relevantProjects.map((project, index) => (
                                                <ProjectItem key={index} project={project} />
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
};

const Experience = ({ projects }: { projects: TProject[] }) => {
    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experiences.map((experience, index) => (
                    <Item key={index} experience={experience} allProjects={projects} />
                ))}
            </div>
        </Section>
    );
};

export default Experience;
