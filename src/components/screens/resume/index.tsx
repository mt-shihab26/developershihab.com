import { Certification } from "./certification";
import { Education } from "./education";
import { Experience } from "./experience";
import { Header } from "./header";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Summary } from "./summary";

export const Resume = ({ image }: { image?: boolean }) => {
    return (
        <div className="mx-auto w-full space-y-4 bg-white p-8 text-sm leading-5">
            <Header image={image} />
            <div className="space-y-4">
                <Summary />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Certification />
            </div>
        </div>
    );
};
