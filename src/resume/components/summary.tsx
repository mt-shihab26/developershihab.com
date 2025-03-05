import { SummaryParagraph } from "~/config/summary";

import { Heading } from "./heading";

const Summary = () => {
    return (
        <section className="space-y-3">
            <Heading>SUMMARY</Heading>
            <div className="text-xs space-y-2">
                <SummaryParagraph />
            </div>
        </section>
    );
};

export { Summary };
