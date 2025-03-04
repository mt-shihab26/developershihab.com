import { educations } from "~/config/experiences";

const Education = () => {
    return (
        <section className="space-y-4">
            <h2 className="font-bold text-blue-600 uppercase border-b pb-1">Education</h2>
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
