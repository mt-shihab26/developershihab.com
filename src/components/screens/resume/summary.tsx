import { Heading } from "./heading";

export const Summary = () => {
    return (
        <section className="space-y-3">
            <Heading>Summary</Heading>
            <div className="space-y-2 leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                    Results-driven Software Engineer with <strong>3+ years of experience</strong> in{" "}
                    <strong>full-stack development</strong> and building <strong>scalable software solutions</strong>.
                    Skilled in architecting, developing, and maintaining high-performance applications that align with
                    both technical and business objectives.
                </p>
                <p>
                    Proficient in modern web technologies, including{" "}
                    <strong>PHP, Laravel, JavaScript/TypeScript, React, TailwindCSS, and WordPress</strong>.
                    Experienced in delivering <strong>end-to-end solutions</strong>, from conception to{" "}
                    <strong>cloud deployment</strong>, with a strong focus on rapid development and{" "}
                    <strong>clean, maintainable code</strong>.
                </p>
                <p>
                    Strong background in problem-solving and analytical thinking, with over{" "}
                    <strong>1,000 problems solved</strong> on online coding platforms. Experienced in collaborating with
                    senior developers, applying industry best practices, and staying up to date with emerging
                    technologies to deliver innovative and efficient solutions.
                </p>
            </div>
        </section>
    );
};
