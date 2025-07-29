import { educations } from "~/lib/experiences";

import { Heading } from "./heading";

const Education = () => {
    return (
        <section className="space-y-3 text-sm">
            <Heading>Education</Heading>
            {educations.map((edu, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs">
                    <div className="text-sm font-semibold">{edu.institution} | </div>
                    <div>{edu.location} | </div>
                    <div>{edu.degree} | </div>
                    <div>{edu.period}</div>
                </div>
            ))}
        </section>
    );
};

export { Education };
