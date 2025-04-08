import { educations } from "~/config/experiences";

import { Heading } from "./heading";

const Education = () => {
    return (
        <section className="space-y-3 text-sm">
            <Heading>Education</Heading>
            {educations.map((edu, index) => (
                <div key={index} className="flex text-xs items-center space-x-2">
                    <div className="font-semibold text-sm">{edu.institution} | </div>
                    <div>{edu.location} | </div>
                    <div>{edu.degree} | </div>
                    <div>{edu.period}</div>
                </div>
            ))}
        </section>
    );
};

export { Education };
