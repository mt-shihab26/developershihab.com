import { Paragraph } from "~/components/elements/paragraph";

const Bio = () => {
    return (
        <div class="space-y-6">
            <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Full-stack developer
            </h1>
            <Paragraph>
                I'm Shihab, and I am a full stack Laravel Developer. I build frontends with React. I
                also work on WordPress plugin development sometimes.
            </Paragraph>
            <Paragraph>
                I lead software development at Finnext, where I manage application and plugin
                development with our team. I handle ongoing maintenance, bug fixes, and
                implementation of new features.
            </Paragraph>
            <Paragraph>
                Interested in Transforming Your ideas into impactful software solutions. I am open
                for work. Let build together.
            </Paragraph>
        </div>
    );
};

export { Bio };
