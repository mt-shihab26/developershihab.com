import { Badge } from "@/components/ui/badge";

import skills, { type TSkill } from "@/config/skills";

import Section from "./Section";

const Item = ({ skill }: { skill: TSkill }) => {
    const { title, tools } = skill;

    return (
        <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-5 lg:gap-y-0">
            <h3 className="w-1/5 font-medium">{title}</h3>
            <div className="flex w-4/5 flex-row flex-wrap gap-x-4 gap-y-2">
                {tools.map((tool, index) => (
                    <Badge key={index} variant="secondary">
                        {tool}
                    </Badge>
                ))}
            </div>
        </div>
    );
};

const Skill = () => {
    return (
        <Section title="Skills">
            {skills.map((skill) => (
                <Item skill={skill} />
            ))}
        </Section>
    );
};

export default Skill;
