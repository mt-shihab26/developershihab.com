import type { TProject, TProjectType } from '@/content/config';
import type { TNode } from '@/types';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Back from '@/components/elements/Back';
import ProjectCard from './ProjectCard';

type TTypeTabsValue = TProjectType | 'all';

const TypeTabs = ({ value, children }: { value: TTypeTabsValue; children: TNode }) => {
	return (
		<Tabs value={value}>
			<TabsList className="mb-8">
				<a href="/projects">
					<TabsTrigger value="all">
						All <span className="ml-1 hidden lg:block">Projects</span>
					</TabsTrigger>
				</a>
				<a href="/projects/clients">
					<TabsTrigger value="client">
						Client <span className="ml-1 hidden lg:block">Projects</span>
					</TabsTrigger>
				</a>
				<a href="/projects/demos">
					<TabsTrigger value="demo">
						Demo <span className="ml-1 hidden lg:block">Projects</span>
					</TabsTrigger>
				</a>
				<a href="/projects/tools">
					<TabsTrigger value="tool">Tools</TabsTrigger>
				</a>
			</TabsList>
			<TabsContent value={value}>{children}</TabsContent>
		</Tabs>
	);
};

const Projects = ({ projects, activeTab }: { projects: TProject[]; activeTab: TTypeTabsValue }) => {
	const filteredProjects =
		activeTab === 'all' ? projects : projects.filter((project) => project.data.type === activeTab);

	return (
		<div className="w-full">
			<Back href="/" />
			<div className="flex flex-col">
				<h1 className="mb-6 mt-5 text-2xl font-bold">My Projects</h1>
				<TypeTabs value={activeTab}>
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						{filteredProjects.length === 0 && <p>No projects yet.</p>}
						{filteredProjects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</TypeTabs>
			</div>
		</div>
	);
};

export default Projects;
