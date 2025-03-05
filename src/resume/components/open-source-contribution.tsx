import { open_source_contribution } from "~/config/open_source_contribution";

import { Heading } from "./heading";

const OpenSourceContribution = () => {
    return (
        <section className="space-y-3">
            <Heading>Open Source Works</Heading>
            <div className="space-y-3">
                {open_source_contribution.map((item, index) => (
                    <div key={index} className="text-xs">
                        <div className="font-semibold">{item.name}</div>
                        <div>
                            {item.description}{" "}
                            <a
                                href={item.link}
                                className="text-blue-600 hover:underline"
                                target="_blank"
                            >
                                [Link]
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export { OpenSourceContribution };
