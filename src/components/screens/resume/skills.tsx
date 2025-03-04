import { frameworks, languages, others } from "~/config/tools_uses";
import { cn } from "~/lib/utils";

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
            <h3 className="text-lg font-semibold">{label}</h3>
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
        <section className="space-y-4">
            <h2 className="font-bold text-blue-600 uppercase border-b pb-1">SKILLS</h2>
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
                className="flex space-x-1 grow"
                skills={others.items.map(
                    (l, i) => `${l.name}${i !== others.items.length - 1 ? "," : ""}`
                )}
            />
        </section>
    );
};

export { Skills };
