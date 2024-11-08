import type { TProject } from '@/content/config';
import type { TTypeTabsValue } from './TypeTabs';

import { useState } from 'react';

import Project from './Project';
import TypeTabs from './TypeTabs';

const Projects = ({ projects }: { projects: TProject[] }) => {
	const [activeTab, setActiveTab] = useState<TTypeTabsValue>('all');

	const filteredProjects =
		activeTab === 'all' ? projects : projects.filter((project) => project.data.type === activeTab);

	return (
		<TypeTabs value={activeTab} onChange={(value) => setActiveTab(value)}>
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				{filteredProjects.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</TypeTabs>
	);
};

export default Projects;
