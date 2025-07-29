import { SummaryParagraph } from "~/lib/summary";

import { Heading } from "./heading";

const Summary = () => {
    return (
        <section className="space-y-3 text-sm">
            <Heading>SUMMARY</Heading>
            <div className="space-y-2">
                <SummaryParagraph />
            </div>
        </section>
    );
};

export { Summary };
