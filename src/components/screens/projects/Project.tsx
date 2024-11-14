import type { TProject } from '@/content/config';
import type { TNode } from '@/types';

import Back from '@/components/Back';
import Scroll from '@/components/Scroll';
import Links from './Links';
import Technologies from './Technologies';

const Project = ({ project, children }: { project: TProject; children: TNode }) => {
	return (
		<div className="w-full space-y-8">
			<Back href="/projects" />
			<article className="flex-grow space-y-12 break-words">
				<div id="project-hero" className="flex flex-col space-y-4">
					<div className="flex items-center space-x-2">
						{project.data.draft && <span className="text-red-500">(Draft)</span>}
						<h1 className="text-3xl font-medium">{project.data.title}</h1>
					</div>
					<div className="flex flex-col justify-between space-y-2 lg:flex-row lg:items-center">
						<Technologies technologies={project.data.technologies} />
						<Links links={project.data.links} />
					</div>
				</div>
				<div className="prose prose-base prose-zinc text-muted-foreground dark:prose-invert prose-headings:font-medium prose-headings:text-foreground prose-headings:before:absolute prose-headings:before:-ms-4 prose-th:before:content-none">
					{children}
				</div>
			</article>
			<Scroll target="project-hero" />
		</div>
	);
};

export default Project;
