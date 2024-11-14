import type { TProject } from '@/content/config';
import type { TNode } from '@/types';

import Back from '@/components/Back';
import Scroll from '@/components/Scroll';
import Links from './Links';
import Technologies from './Technologies';

const Project = ({ project, children }: { project: TProject; children: TNode }) => {
	return (
		<div className="w-full">
			<Back href="/projects" />
			<div className="mt-8 gap-x-10 lg:flex lg:items-start">
				<article className="flex-grow break-words" data-pagefind-body>
					<div id="project-hero" className="flex flex-col space-y-2">
						{project.data.cover && (
							<div className="aspect-h-9 aspect-w-16 mb-6">
								<img
									className="rounded-2xl object-cover"
									loading="eager"
									src={project.data.cover.src.src}
									alt={project.data.cover.alt}
								/>
							</div>
						)}
						{project.data.draft ? <span className="text-red-500">(Draft)</span> : null}
						<div className="mb-2 flex items-center space-x-2">
							<h1 className="text-3xl font-medium">{project.data.title}</h1>
						</div>
						<Technologies technologies={project.data.technologies} />
						<Links links={project.data.links} />
					</div>
					<div className="prose prose-base prose-zinc mt-12 text-muted-foreground dark:prose-invert prose-headings:font-medium prose-headings:text-foreground prose-headings:before:absolute prose-headings:before:-ms-4 prose-th:before:content-none">
						{children}
					</div>
				</article>
			</div>
			<Scroll target="project-hero" />
		</div>
	);
};

export default Project;
