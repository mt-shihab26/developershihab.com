import { Fragment } from "react";

export const SummaryParagraph = ({ seperated }: { seperated?: boolean }) => {
    const content = [
        <>
            Results-driven full-stack developer specializing in React, Laravel, and WordPress
            applications with proven expertise in building and scaling SaaS products.
        </>,
        <>
            Has strong foundation in data structures and algorithms (1100+ competitive programming
            problems solved).
        </>,
        <>
            Passionate about creating clean, maintainable code that delivers meaningful business
            outcomes.
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
