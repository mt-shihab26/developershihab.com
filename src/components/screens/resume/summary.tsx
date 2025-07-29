import { Fragment } from "react";
import { Heading } from "./heading";

const SummaryParagraph2 = ({ seperated }: { seperated?: boolean }) => {
    const content = [
        <>
            Full-stack developer with 3+ years of experience. Specializing in React, Laravel, and WordPress applications
            with proven expertise in building and scaling SaaS products.
        </>,
        <>Strong foundation in data structures and algorithms (1100+ competitive programming problems solved)</>,
        <>
            Passionate about creating clean, maintainable code that delivers meaningful business outcomes. Open to
            learning new technologies.
        </>
    ];

    if (seperated) {
        return (
            <div className="prose dark:prose-invert space-y-4">
                {content.map((paragraph, index) => (
                    <div key={index}>{paragraph}</div>
                ))}
            </div>
        );
    }

    return (
        <>
            {content.map((paragraph, index) => (
                <Fragment key={index}>{paragraph} </Fragment>
            ))}
        </>
    );
};

export const Summary = () => {
    return (
        <section className="space-y-3 text-sm">
            <Heading>SUMMARY</Heading>
            <div className="space-y-2">
                <SummaryParagraph2 />
            </div>
        </section>
    );
};
