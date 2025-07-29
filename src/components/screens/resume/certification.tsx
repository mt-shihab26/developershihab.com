import { certifications } from "~/lib/skills";

import { Heading } from "./heading";

const Certification = () => {
    return (
        <section className="space-y-3">
            <Heading>Certification</Heading>
            <ul className="text-xs">
                {certifications.map((cert, index) => (
                    <li key={index} className="mb-1">
                        {cert.name} on {cert.date}
                        {cert.link && (
                            <a target="_blank" href={cert.link} className="ml-1 text-blue-600 hover:underline">
                                [Link]
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export { Certification };
