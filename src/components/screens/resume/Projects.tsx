import type { TProject } from '@/content/config';

import ProjectCard from '@/components/screens/projects/ProjectCard';
import More from './More';
import Section from './Section';

const Projects = ({ projects }: { projects: TProject[] }) => {
	return (
		<Section title="Projects">
			<div className="flex flex-col gap-y-4">
				{projects.map((project) => (
					<ProjectCard project={project} />
				))}
			</div>
			<div className="flex justify-end">
				<More href="/projects">See all projects</More>
			</div>
		</Section>
	);
};

export default Projects;
