import { certifications } from "~/config/experiences";

import { Heading } from "./heading";

const Certification = () => {
    return (
        <section className="space-y-4">
            <Heading>Certification</Heading>
            <ul className="text-xs">
                {certifications.map((cert, index) => (
                    <li key={index} className="mb-1">
                        {cert.name} on {cert.date}
                        {cert.link && (
                            <a
                                target="_blank"
                                href={cert.link}
                                className="text-blue-600 hover:underline ml-1"
                            >
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
