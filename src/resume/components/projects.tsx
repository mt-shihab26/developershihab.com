import { meta } from "~/lib/meta";

import { open_source_contribution } from "~/config/open_source_contribution";
import { Heading } from "./heading";

export type TProject = {
    slug?: string;
    name: string;
    technologies: string[];
    description: string;
    link: { href: string; label?: string } | undefined;
};

const OpenSource = ({ projects }: { projects: TProject[] }) => {
    return (
        <section className="space-y-3">
            <Heading>Open Source</Heading>
            <ul className="space-y-2 text-xs">
                {projects.map((project, index) => (
                    <li key={index}>
                        <div className="flex space-x-2 items-center">
                            <div className="font-semibold text-sm">{project.name}</div>
                            <div className="text-gray-600 flex space-x-1">
                                <div className="flex space-x-1">
                                    (
                                    {project.technologies.map((t, i) => (
                                        <div key={i}>
                                            {t}
                                            {i !== project.technologies.length - 1 && ", "}
                                        </div>
                                    ))}
                                    )
                                </div>
                                <a
                                    href={
                                        project.link?.href ||
                                        `${meta.url}/projects/${project.slug || "/"}`
                                    }
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                >
                                    [Link]
                                </a>{" "}
                                :{" "}
                            </div>
                        </div>
                        <div className="text-[10px]">{project.description}</div>
                    </li>
                ))}
            </ul>
            <div className="space-y-3">
                {open_source_contribution.map((item, index) => (
                    <div key={index} className="text-xs">
                        <div className="font-semibold">{item.name}</div>
                        <div>
                            {item.description}{" "}
                            <a
                                href={item.link}
                                className="text-blue-600 hover:underline"
                                target="_blank"
                            >
                                [Link]
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export { OpenSource };
