import { skills } from "@/lib/skills";

import { Heading } from "./heading";

export const Skills = () => {
    return (
        <section className="space-y-3">
            <Heading>Skills</Heading>
            <div className="space-y-3">
                {skills.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h4 className="mb-1 font-semibold text-gray-900 underline underline-offset-2 dark:text-white">
                            {category.label}
                        </h4>
                        <div className="text-xs">
                            {category.items.map((skill, index) => (
                                <div key={index}>
                                    <span className="font-medium">{skill.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
