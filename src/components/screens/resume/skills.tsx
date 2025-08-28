import { skills } from "@/lib/skills";

import { Heading } from "./heading";

export const Skills = () => {
    return (
        <section className="space-y-3">
            <Heading>Skills</Heading>
            <div className="space-y-4">
                {skills.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">{category.label}</h4>
                        <div className="text-xs">
                            {category.items.map((skill, index) => (
                                <span key={index}>
                                    {index > 0 && ", "}
                                    <span className="font-medium">{skill.title}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
