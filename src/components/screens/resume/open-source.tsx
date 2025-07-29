import type { TProject } from "~/lib/projects";

import { Heading } from "./heading";

const OpenSource = ({ projects }: { projects: TProject[] }) => {
    return (
        <section className="space-y-3 text-sm">
            <Heading>Open Source Work</Heading>
            <ul className="space-y-2">
                {projects.map((project, index) => (
                    <li key={index}>
                        <div className="flex items-center space-x-2">
                            <div className="text-base font-semibold">{project.data.name}</div>
                            <div className="flex space-x-1 text-gray-600">
                                <div className="flex space-x-1">
                                    (
                                    {project.data.technologies.map((t, i) => (
                                        <div key={i}>
                                            {t}
                                            {i !== project.data.technologies.length - 1 && ", "}
                                        </div>
                                    ))}
                                    )
                                </div>
                                <a
                                    href={project.data.liveLink}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                >
                                    [Link]
                                </a>{" "}
                                :{" "}
                            </div>
                        </div>
                        <div className="text-xs">{project.body}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export { OpenSource };
