import type { TProject, TType } from '@/content/config';

import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Project from './Project';

const Projects = ({ projects }: { projects: TProject[] }) => {
	const [activeTab, setActiveTab] = useState<TType | 'all'>('all');

	const filteredProjects =
		activeTab === 'all' ? projects : projects.filter((project) => project.data.type === activeTab);

	return (
		<Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)}>
			<TabsList className="mb-8">
				<TabsTrigger value="all">
					All <span className="ml-1 hidden lg:block">Projects</span>
				</TabsTrigger>
				<TabsTrigger value="client">
					Client <span className="ml-1 hidden lg:block">Projects</span>
				</TabsTrigger>
				<TabsTrigger value="demo">
					Demo <span className="ml-1 hidden lg:block">Projects</span>
				</TabsTrigger>
				<TabsTrigger value="tool">Tools</TabsTrigger>
			</TabsList>
			<TabsContent value={activeTab}>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					{filteredProjects.map((project) => (
						<Project key={project.id} project={project} />
					))}
				</div>
			</TabsContent>
		</Tabs>
	);
};

export default Projects;
