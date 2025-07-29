import { experiences } from "~/lib/experiences";

import { Heading } from "./heading";

const Experience = () => {
    return (
        <section className="space-y-3 text-sm">
            <Heading>Work Experience</Heading>
            {experiences.map((e, index) => (
                <div key={index} className="space-y-2">
                    <div>
                        <h3>
                            <span className="text-base font-bold">{e.company}</span> — <em>{e.role}</em>
                        </h3>
                        <div className="text-gray-600">
                            <span>{e.location}</span>, {e.start} - {e.end}
                        </div>
                    </div>
                    <div className="text-xs">
                        <ul className="ml-6 list-disc">
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
