import { experiences } from "~/config/experiences";

import { Heading } from "./heading";

const Experience = () => {
    return (
        <section className="space-y-3">
            <Heading>Work Experience</Heading>
            {experiences.map((e, index) => (
                <div key={index} className="space-y-2">
                    <div>
                        <h3>
                            <span className="text-lg font-bold">{e.company}</span> —{" "}
                            <em>{e.role}</em>
                        </h3>
                        <div className="text-gray-600">
                            <span>{e.location}</span>, {e.start} - {e.end}
                        </div>
                    </div>
                    <p className="text-xs">{e.description}</p>
                    <div className="text-xs">
                        <ul className="list-disc ml-6">
                            {e.highlights.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
};

export { Experience };
