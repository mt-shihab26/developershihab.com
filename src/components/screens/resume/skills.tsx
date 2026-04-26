import { skills } from "@/lib/skills";

import { Heading } from "./heading";

export const Skills = () => {
    return (
        <section className="space-y-3">
            <Heading>Skills</Heading>
            <div className="space-y-3">
                {skills.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h4 className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                            {category.label}
                        </h4>
                        <div className="text-xs">
                            {category.items
                                .filter(skill => !skill.resume_disable)
                                .map((skill, index) => (
                                    <div key={index}>
                                        <span className="font-medium">{skill.resume_title ?? skill.title}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
