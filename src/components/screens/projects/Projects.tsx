import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon, InfoIcon } from 'lucide-react';

type Project = {
	id: string;
	title: string;
	description: string;
	type: 'client' | 'demo' | 'tool';
	tags: string[];
	liveLink?: string;
	sourceCode?: string;
	otherLinks?: { title: string; url: string }[];
};

const projects: Project[] = [
	{
		id: 'project1',
		title: 'E-commerce Platform',
		description: 'A full-featured e-commerce solution for a client in the fashion industry.',
		type: 'client',
		tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
		liveLink: 'https://example-ecommerce.com',
		sourceCode: 'https://github.com/yourusername/ecommerce-platform'
	},
	{
		id: 'project2',
		title: 'Weather App',
		description: 'A demo weather application showcasing API integration and geolocation.',
		type: 'demo',
		tags: ['React', 'OpenWeatherMap API', 'Geolocation'],
		liveLink: 'https://weather-demo.yourdomain.com',
		sourceCode: 'https://github.com/yourusername/weather-app'
	},
	{
		id: 'project3',
		title: 'Code Snippet Manager',
		description: 'A tool for developers to store and organize code snippets.',
		type: 'tool',
		tags: ['Vue.js', 'Firebase', 'CodeMirror'],
		liveLink: 'https://snippetmanager.yourdomain.com',
		sourceCode: 'https://github.com/yourusername/snippet-manager',
		otherLinks: [{ title: 'Documentation', url: 'https://docs.snippetmanager.yourdomain.com' }]
	}
	// Add more projects as needed
];

function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="flex h-full flex-col">
			<CardHeader>
				<CardTitle>{project.title}</CardTitle>
				<CardDescription>{project.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex-grow">
				<div className="mb-4 flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<Badge key={tag} variant="secondary">
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<div className="flex space-x-2">
					{project.liveLink && (
						<Button variant="outline" size="sm" asChild>
							<a href={project.liveLink} target="_blank" rel="noopener noreferrer">
								<ExternalLinkIcon className="mr-2 h-4 w-4" />
								Live
							</a>
						</Button>
					)}
					{project.sourceCode && (
						<Button variant="outline" size="sm" asChild>
							<a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
								<GithubIcon className="mr-2 h-4 w-4" />
								Source
							</a>
						</Button>
					)}
				</div>
				<Button variant="default" size="sm" asChild>
					<a href={`/projects/${project.id}`}>
						<InfoIcon className="mr-2 h-4 w-4" />
						Details
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}

const Projects = () => {
	const [activeTab, setActiveTab] = useState<'all' | 'client' | 'demo' | 'tool'>('all');

	const filteredProjects =
		activeTab === 'all' ? projects : projects.filter((project) => project.type === activeTab);

	return (
		<div>
			<h1 className="mb-8 text-3xl font-bold">My Projects</h1>
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
		</div>
	);
};

export default Projects;
