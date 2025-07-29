import { skills } from "~/lib/skills";
import { cn } from "~/lib/utils";

import { Fragment } from "react";
import { Heading } from "./heading";

const Seperator = () => {
    return <span className="mx-1 text-black">•</span>;
};

const Items = ({ label, skills, className }: { label: string; skills: string[]; className?: string }) => {
    return (
        <div className="flex items-center space-x-1">
            <h3 className="font-medium">{label}: </h3>
            <ul className={cn("text-xs flex items-center text-gray-600", className)}>
                {skills.map((skill, index) => (
                    <Fragment key={index}>
                        {index !== 0 && <Seperator />}
                        <li>{skill}</li>
                    </Fragment>
                ))}
            </ul>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="text-sm space-y-1">
            <Heading>SKILLS</Heading>
            <Items
                label="Languages"
                skills={skills.find((x) => x.title === "Languages")?.items.map((l) => `${l.name}`) || []}
            />
            <Items
                label="Frameworks"
                skills={skills.find((x) => x.title === "Frameworks")?.items.map((l) => `${l.name}`) || []}
            />
            <Items
                label="Others"
                skills={skills.find((x) => x.title === "Others")?.items.map((l) => `${l.name}`) || []}
            />
        </section>
    );
};

export { Skills };
