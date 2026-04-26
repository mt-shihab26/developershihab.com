import { skills } from "@/lib/skills";

import { Heading } from "./heading";

export const Skills = () => {
    return (
        <section className="space-y-3">
            <Heading>Skills</Heading>
            <div className="space-y-3">
                {skills.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h4 className="mb-1 border-b border-gray-200 pb-0.5 font-semibold tracking-wide uppercase dark:border-gray-700">
                            {category.label}
                        </h4>
                        <div className="space-y-0.5">
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
