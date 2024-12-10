import type { TProject } from "@/content/config";

import { buttonVariants } from "@/components/ui/button";

import { InfoIcon } from "@/components/composite/icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import Links from "./Links";
import Technologies from "./Technologies";

const ProjectCard = ({ project }: { project: TProject }) => {
    return (
        <Card className="flex h-full flex-col">
            <CardHeader className="flex items-start justify-between pb-4">
                <CardTitle>
                    {project.data.draft && <span className="mr-1 text-red-500">(Draft)</span>}{" "}
                    {project.data.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                    {project.data.date.start} - {project.data.date.end}
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <CardDescription>{project.data.description}</CardDescription>
                {project.data.technologies && (
                    <Technologies technologies={project.data.technologies} />
                )}
                <div className="flex justify-between">
                    <Links links={project.data.links} />
                    <a
                        href={`/projects/${project.slug}`}
                        className={buttonVariants({ variant: "default", size: "sm" })}
                    >
                        <InfoIcon className="mr-2 h-4 w-4" />
                        Details
                    </a>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
