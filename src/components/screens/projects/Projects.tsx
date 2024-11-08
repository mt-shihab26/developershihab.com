import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

import type { TProject, TType } from '@/content/config';

import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon, InfoIcon } from 'lucide-react';

function ProjectCard({ project }: { project: TProject }) {
	return (
		<Card className="flex h-full flex-col">
			<CardHeader>
				<CardTitle>{project.data.title}</CardTitle>
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
}

const Projects = ({ projects }: { projects: TProject[] }) => {
	const [activeTab, setActiveTab] = useState<TType | 'all'>('all');

	const filteredProjects =
		activeTab === 'all' ? projects : projects.filter((project) => project.data.type === activeTab);

	return (
		<Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)}>
			<TabsList className="mb-8">
				<TabsTrigger value="all">All Projects</TabsTrigger>
				<TabsTrigger value="client">Client Projects</TabsTrigger>
				<TabsTrigger value="demo">Demo Projects</TabsTrigger>
				<TabsTrigger value="tool">Tools</TabsTrigger>
			</TabsList>
			<TabsContent value={activeTab}>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					{filteredProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</TabsContent>
		</Tabs>
	);
};

export default Projects;
