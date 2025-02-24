import { External } from "~/components/elements/external";
import { Paragraph } from "~/components/elements/paragraph";

const Bio = () => {
    return (
        <div class="space-y-6">
            <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Full-stack developer
            </h1>
            <Paragraph>
                I'm Shihab, and I am a full stack{" "}
                <External href="https://laravel.com">Laravel</External> Developer. I build frontends
                with <External href="https://react.dev">React</External>. I also work on{" "}
                <External href="https://wordpress.org">WordPress</External> plugin development
                sometimes.
            </Paragraph>
            <Paragraph>
                I lead software development team at Finnext, where I build & manage applications and
                plugins development, deployment with our team. I handle ongoing maintenance, bug
                fixes, and implementation of new features.
            </Paragraph>
            <Paragraph>
                Interested in Transforming Your ideas into impactful software solutions. I am open
                for work. Let build together.
            </Paragraph>
        </div>
    );
};

export { Bio };
