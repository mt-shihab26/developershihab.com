import { skills } from "@/lib/skills";

import { Heading } from "./heading";

export const Skills = () => {
    return (
        <section>
            <Heading>Skills</Heading>
            <div className="space-y-2">
                {skills.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h4 className="mb-0.5 pb-0.5 font-bold underline">{category.label}</h4>
                        <div className="space-y-0.5">
                            {category.items
                                .filter(skill => !skill.resume_disable)
                                .map((skill, index) => (
                                    <div key={index}>
                                        <span>{skill.resume_title ?? skill.title}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
