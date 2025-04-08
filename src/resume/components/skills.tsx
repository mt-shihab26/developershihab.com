import { frameworks, languages, others } from "~/config/tools_uses";
import { cn } from "~/lib/utils";

import { Fragment } from "react";
import { Heading } from "./heading";

const Seperator = () => {
    return <span className="mx-1 text-black">•</span>;
};

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
            <ul className={cn("text-xs flex text-gray-600", className)}>
                {skills.map((skill, index) => (
                    <Fragment key={index}>
                        <Seperator />
                        <li>{skill}</li>
                    </Fragment>
                ))}
            </ul>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="text-sm space-y-3">
            <Heading>SKILLS</Heading>
            <Items label="Language" skills={languages.items.map((l) => `${l.name}`)} />
            <Items label="Framework" skills={frameworks.items.map((l) => `${l.name}`)} />
            <Items
                label="Misc"
                // className="flex space-x-1 grow"
                skills={others.items.map(
                    (l) => `${l.name}` // ${i !== others.items.length - 1 ? "," : ""}
                )}
            />
        </section>
    );
};

export { Skills };
