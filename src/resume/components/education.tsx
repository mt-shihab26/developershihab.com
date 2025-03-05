import { educations } from "~/config/experiences";

import { Heading } from "./heading";

const Education = () => {
    return (
        <section className="space-y-3">
            <Heading>Education</Heading>
            {educations.map((edu, index) => (
                <div key={index} className="text-xs">
                    <div className="font-semibold">{edu.institution}</div>
                    <div>{edu.location}</div>
                    <div>{edu.degree}</div>
                    <div>{edu.period}</div>
                </div>
            ))}
        </section>
    );
};

export { Education };
