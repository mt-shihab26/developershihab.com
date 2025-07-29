import { skills } from "~/config/skills";
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
            <ul className={cn("flex items-center text-xs text-gray-600", className)}>
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
        <section className="space-y-1 text-sm">
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
