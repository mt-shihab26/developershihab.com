import { educations } from "~/config/experiences";
import { Heading } from "./heading";

const Education = () => {
    return (
        <section className="space-y-4">
            <Heading>Education</Heading>
            {educations.map((edu, index) => (
                <div key={index} className="text-xs">
                    <span className="font-semibold">{edu.institution}, </span>{" "}
                    <span>{edu.location}</span> <span> - </span>
                    <span>{edu.degree}</span> <span> - </span> <span>{edu.period}</span>
                </div>
            ))}
        </section>
    );
};

export { Education };
