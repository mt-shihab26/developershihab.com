import { Heading } from "./heading";

export const Summary = () => {
    return (
        <section>
            <Heading>Summary</Heading>
            <div className="space-y-1.5">
                <div>
                    Software Engineer with <span className="font-semibold">3+ years of experience</span> in{" "}
                    <span className="font-semibold">full-stack web development</span>. Most of that time has gone into
                    building SaaS products from the first line of code and then keeping them running in production for
                    real, paying users.
                </div>
                <div>
                    I work mainly with{" "}
                    <span className="font-semibold">
                        PHP, Laravel, JavaScript/TypeScript, React, TailwindCSS, and WordPress
                    </span>
                    . I usually handle a feature from start to finish, from the database schema and API to the UI and{" "}
                    <span className="font-semibold">cloud deployment</span>, and I care about shipping quickly without
                    leaving messy code behind.
                </div>
                <div>
                    I got into programming through competitive problem-solving and have solved over{" "}
                    <span className="font-semibold">1,000 problems</span> on online judges such as Codeforces, LightOJ,
                    and LeetCode. I have also contributed fixes and features to Laravel's open source repositories, and
                    I like learning new tools by building small projects with them.
                </div>
            </div>
        </section>
    );
};
