import { Fragment } from "react";

export const SummaryParagraph = ({ seperated }: { seperated?: boolean }) => {
    const content = [
        <>
            Full-stack developer with expertise in Laravel, React, and WordPress, complemented by a
            strong foundation in data structures and algorithms from competitive programming
            experience (1100+ problems).
        </>,
        <>
            Specialized in building dynamic applications using JavaScript/TypeScript, PHP, and
            modern development workflows.
        </>,
        <>
            Currently working with Finnext on various projects (including paystubhero.com,
            quickdoctorsnote.com, etc.).
        </>,
        <>
            Committed to clean, maintainable code and best practices while seeking opportunities to
            contribute to meaningful projects that simplify lives through technology.
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
