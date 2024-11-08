import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

import type { TProject } from '@/content/config';

import { ExternalLinkIcon, GithubIcon, InfoIcon } from '@/components/composite/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Project = ({ project }: { project: TProject }) => {
	return (
		<Card className="flex h-full flex-col">
			<CardHeader>
				<CardTitle>
					{project.data.draft && <span className="mr-1 text-red-500">(Draft)</span>}{' '}
					{project.data.title}
				</CardTitle>
				<CardDescription>{project.data.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex-grow">
				{project.data.technologies && (
					<div className="mb-4 flex flex-wrap gap-2">
						{project.data.technologies.map((tag) => (
							<Badge key={tag} variant="secondary">
								{tag}
							</Badge>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter className="flex justify-between">
				<div className="flex space-x-2">
					{project.data.links.live_link && (
						<Button variant="outline" size="sm" asChild>
							<a href={project.data.links.live_link} target="_blank" rel="noopener noreferrer">
								<ExternalLinkIcon className="mr-2 h-4 w-4" />
								Live
							</a>
						</Button>
					)}
					{project.data.links.source_code && (
						<Button variant="outline" size="sm" asChild>
							<a href={project.data.links.source_code} target="_blank" rel="noopener noreferrer">
								<GithubIcon className="mr-2 h-4 w-4" />
								Source
							</a>
						</Button>
					)}
				</div>
				<Button variant="default" size="sm" asChild>
					<a href={`/projects/${project.slug}`}>
						<InfoIcon className="mr-2 h-4 w-4" />
						Details
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default Project;
