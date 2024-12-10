import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import type { TProject } from "@/content/config";

import { CalendarIcon, InfoIcon } from "@/components/composite/icons";
import { Button } from "@/components/ui/button";

import Links from "./Links";
import Technologies from "./Technologies";

const DetailsButton = ({ href }: { href: string }) => {
    return (
        <Button variant="default" size="sm" asChild>
            <a href={href}>
                <InfoIcon className="mr-2 h-4 w-4" />
                Details
            </a>
        </Button>
    );
};

const DateRange = ({ start, end }: { start: string; end: string }) => {
    return (
        <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>
                {start} - {end}
            </span>
        </div>
    );
};

const ProjectCard = ({ project }: { project: TProject }) => {
    return (
        <Card className="flex h-full flex-col">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <CardTitle>
                        {project.data.draft && <span className="mr-1 text-red-500">(Draft)</span>}{" "}
                        {project.data.title}
                    </CardTitle>
                    {project.data.date && (
                        <DateRange start={project.data.date.start} end={project.data.date.end} />
                    )}
                </div>
                <CardDescription>{project.data.description}</CardDescription>
            </CardHeader>
            <CardContent className="mb-4 flex-grow">
                {project.data.technologies && (
                    <Technologies technologies={project.data.technologies} />
                )}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Links links={project.data.links} />
                <DetailsButton href={`/projects/${project.slug}`} />
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
