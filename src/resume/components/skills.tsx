import { frameworks, languages, others } from "~/config/tools_uses";
import { cn } from "~/lib/utils";

import { Heading } from "./heading";

const Items = ({
    label,
    skills,
    className
}: {
    label: string;
    skills: string[];
    className?: string;
}) => {
    return (
        <div className="space-y-1">
            <h3 className="font-medium">{label}</h3>
            <ul className={cn("text-xs text-gray-600", className)}>
                {skills.map((skill, index) => (
                    <li key={index} className="">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="space-y-3">
            <Heading>SKILLS</Heading>
            <Items
                label="Language"
                skills={languages.items.map((l) => `${l.name} (${l.duration})`)}
            />
            <Items
                label="Framework"
                skills={frameworks.items.map((l) => `${l.name} (${l.duration})`)}
            />
            <Items
                label="Other Technologies"
                // className="flex space-x-1 grow"
                skills={others.items.map(
                    (l) => `${l.name}` // ${i !== others.items.length - 1 ? "," : ""}
                )}
            />
        </section>
    );
};

export { Skills };
