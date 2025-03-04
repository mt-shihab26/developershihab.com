import type { TProject } from "~/lib/projects";

import { meta } from "~/lib/meta";

const Projects = ({ projects }: { projects: TProject[] }) => {
    return (
        <section className="space-y-4">
            <h2 className="font-bold text-blue-600 uppercase border-b pb-1">Projects</h2>
            <ul className="space-y-2 text-xs">
                {projects.map((project, index) => (
                    <li key={index}>
                        <div className="flex space-x-2 items-center">
                            <div className="font-semibold text-base">{project.data.name}</div>
                            <div className="text-gray-600 flex space-x-1">
                                (
                                {project.data.technologies.map((t, i) => (
                                    <div>
                                        {t}
                                        {i !== project.data.technologies.length - 1 && ", "}
                                    </div>
                                ))}
                                ):
                            </div>
                        </div>
                        <div>
                            {project.data.description}
                            <a
                                href={
                                    project.data.link?.href ||
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
