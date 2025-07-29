import { skills } from "~/config/skills";

export const SkillsItems = () => {
    return (
        <ul className="space-y-1">
            {skills.map((skill) => (
                <li key={skill.title} className="flex flex-wrap space-x-2">
                    <div className="font-semibold text-black dark:text-white">{skill.title}:</div>
                    <div className="flex flex-wrap space-x-2">
                        {skill.items.map((item, index) => (
                            <div key={index} className="">
                                {item.name}
                                {item.duration && (
                                    <span className="font-normal text-gray-700 dark:text-gray-400">
                                        {" "}
                                        ({item.duration})
                                    </span>
                                )}
                                {index !== skill.items.length - 1 && ","}
                            </div>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    );
};
