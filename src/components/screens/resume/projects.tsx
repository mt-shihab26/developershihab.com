import { meta } from "~/lib/meta";

export type TProject = {
    name: string;
    technologies: string[];
    description: string;
    slug: string;
    link: { href: string; label?: string } | undefined;
};

const Projects = ({ projects }: { projects: TProject[] }) => {
    return (
        <section className="space-y-4">
            <h2 className="font-bold text-blue-600 uppercase border-b pb-1">Projects</h2>
            <ul className="space-y-2 text-xs">
                {projects.map((project, index) => (
                    <li key={index}>
                        <div className="flex space-x-2 items-center">
                            <div className="font-semibold text-base">{project.name}</div>
                            <div className="text-gray-600 flex space-x-1">
                                (
                                {project.technologies.map((t, i) => (
                                    <div>
                                        {t}
                                        {i !== project.technologies.length - 1 && ", "}
                                    </div>
                                ))}
                                ):
                            </div>
                        </div>
                        <div>
                            {project.description}
                            <a
                                href={
                                    project.link?.href ||
                                    `${meta.url}/projects/${project.slug || "/"}`
                                }
                                className="text-blue-600 hover:underline ml-1"
                                target="_blank"
                            >
                                [Link]
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export { Projects };
