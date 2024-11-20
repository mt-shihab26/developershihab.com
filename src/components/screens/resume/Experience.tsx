import type { TProject } from '@/content/config';

import experiences, { type TExperience } from '@/config/experiences';

import Section from './Section';

import { Card, CardContent } from '@/components/ui/card';

const Item = ({
	experience,
	allProjects
}: {
	experience: TExperience;
	allProjects: TProject[];
}) => {
	const { position, firm, description, date, projects } = experience;

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
						{projects.length > 0 && (
							<ul className="mt-1 space-y-2">
								{projects.map((projectSlug) => {
									const project = allProjects.find((p) => p.slug === projectSlug);
									if (!project) return null;

									return (
										<li key={project.slug} className="rounded-2xl border p-3">
											<a
												href={`/projects/${project.slug}?back=/`}
												className="text-md font-semibold hover:underline hover:underline-offset-2"
											>
												{project.data.title}
											</a>
											<ul className="ml-6 list-disc text-sm text-muted-foreground">
												{project.data.date && (
													<li>
														<span className="font-medium">Date:</span>{' '}
														<span>
															{project.data.date.start} - {project.data.date.end}
														</span>
													</li>
												)}
												{project.data.technologies && project.data.technologies.length > 0 && (
													<li>
														<span className="font-medium">Technologies:</span>{' '}
														{project.data.technologies.map((technology, index) => (
															<span key={technology}>
																{index + 1 === project.data.technologies?.length
																	? technology
																	: `${technology}, `}
															</span>
														))}
													</li>
												)}
											</ul>
										</li>
									);
								})}
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
			{experiences.map((experience) => (
				<Item experience={experience} allProjects={projects} />
			))}
		</Section>
	);
};

export default Experience;
