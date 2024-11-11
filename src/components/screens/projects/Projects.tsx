import type { TProject } from '@/content/config';
import type { TTypeTabsValue } from './TypeTabs';

import Back from '@/components/Back';
import Project from './Project';
import TypeTabs from './TypeTabs';

const Projects = ({ projects, activeTab }: { projects: TProject[]; activeTab: TTypeTabsValue }) => {
	const filteredProjects =
		activeTab === 'all' ? projects : projects.filter((project) => project.data.type === activeTab);

	return (
		<div className="w-full">
			<Back href="/" />
			<div className="flex flex-col">
				<h1 className="mb-6 mt-5 text-2xl font-bold">My Projects</h1>
				{projects.length === 0 ? (
					<p>No projects yet.</p>
				) : (
					<TypeTabs value={activeTab}>
						<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
							{filteredProjects.map((project) => (
								<Project key={project.id} project={project} />
							))}
						</div>
					</TypeTabs>
				)}
			</div>
		</div>
	);
};

export default Projects;
