import { skills } from "@/lib/skills";
import { yearsSince } from "@/lib/utils";

import { Heading } from "./heading";

const formatYears = (years: number): string => {
    if (years < 1) return "< 1 yr";
    return `${years} ${years === 1 ? "yr" : "yrs"}`;
};

export const Skills = () => {
    return (
        <section>
            <Heading>Skills</Heading>
            <div className="space-y-2">
                {skills.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h4 className="mb-0.5 pb-0.5 font-bold underline decoration-gray-400">{category.label}</h4>
                        <div className="space-y-0.5">
                            {category.items
                                .filter(skill => !skill.resume_disable)
                                .map((skill, index) => (
                                    <div key={index}>
                                        <span>{skill.resume_title ?? skill.title}</span>
                                        {(skill.level || skill.since) && (
                                            <span className="ml-1 text-[10px]">
                                                (
                                                {[skill.level, skill.since && formatYears(yearsSince(skill.since))]
                                                    .filter(Boolean)
                                                    .join(", ")}
                                                )
                                            </span>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
