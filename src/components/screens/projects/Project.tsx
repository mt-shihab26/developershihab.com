import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

import type { TProject } from '@/content/config';

import DetailsButton from './DetailsButton';
import GithubButton from './GithubButton';
import LiveLinkButton from './LiveLinkButton';
import Technologies from './Technologies';

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
				{project.data.technologies && <Technologies technologies={project.data.technologies} />}
			</CardContent>
			<CardFooter className="flex justify-between">
				<div className="flex space-x-2">
					{project.data.links.live_link && <LiveLinkButton href={project.data.links.live_link} />}
					{project.data.links.source_code && <GithubButton href={project.data.links.source_code} />}
				</div>
				<DetailsButton href={`/projects/${project.slug}`} />
			</CardFooter>
		</Card>
	);
};

export default Project;
