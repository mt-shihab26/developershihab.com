import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import experiences, { type TExperience } from '@/config/experiences';
import type { TProject } from '@/content/config';
import Section from './Section';

const ProjectItem = ({ project }: { project: TProject }) => (
	<li>
		<a
			href={`/projects/${project.slug}`}
			className="group block rounded-lg border border-border p-4 transition-all duration-200 hover:border-foreground/25 hover:shadow-sm"
		>
			<div className="flex items-center justify-between gap-4">
				<div className="space-y-1.5">
					<h3 className="font-medium group-hover:text-foreground">{project.data.title}</h3>
					{project.data.technologies && (
						<p className="text-sm text-muted-foreground">{project.data.technologies.join(', ')}</p>
					)}
				</div>
				<Badge
					variant="secondary"
					className="shrink-0 text-xs transition-colors group-hover:bg-background"
				>
					View Project →
				</Badge>
			</div>
		</a>
	</li>
);
const Item = ({
	experience,
	allProjects
}: {
	experience: TExperience;
	allProjects: TProject[];
}) => {
	const { position, firm, description, date, projects } = experience;

	const relevantProjects = projects
		.map((slug) => allProjects.find((p) => p.slug === slug))
		.filter((project): project is TProject => Boolean(project));

	return (
		<Card className="relative">
			<CardContent className="p-5">
				{firm.logo && (
					<img
						src={firm.logo}
						alt={firm.alt || ''}
						className="mb-3 h-12 w-auto lg:absolute lg:-left-16 lg:mb-0"
					/>
				)}
				<div className="flex flex-col gap-y-1.5">
					<div className="flex flex-col gap-y-0.5">
						<h1 className="flex flex-col text-lg font-medium text-foreground lg:flex-row lg:space-x-0.5">
							<span>{position}</span>
							<span>
								@
								<a
									href={firm.link}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									{firm.name}
								</a>
							</span>
						</h1>
						<time>{date}</time>
						<p className="text-muted-foreground">{description}</p>
						{relevantProjects.length > 0 && (
							<ul className="mt-3 space-y-2">
								{relevantProjects.map((project) => (
									<ProjectItem key={project.slug} project={project} />
								))}
							</ul>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

const Experience = ({ projects }: { projects: TProject[] }) => {
	return (
		<Section title="Experience">
			<div className="space-y-6">
				{experiences.map((experience) => (
					<Item
						key={`${experience.firm.name}-${experience.position}`}
						experience={experience}
						allProjects={projects}
					/>
				))}
			</div>
		</Section>
	);
};

export default Experience;
