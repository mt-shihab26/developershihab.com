import { Certification } from "./certification";
import { Education } from "./education";
import { Experience } from "./experience";
import { Header } from "./header";
import { OpenSource, type TProject } from "./open-source";
import { Skills } from "./skills";
import { Summary } from "./summary";

const Resume = ({ projects, image }: { projects: TProject[]; image?: boolean }) => {
    return (
        <div className="leading-5 text-sm space-y-4 w-full mx-auto p-8 bg-white">
            <Header image={image} />
            <div className="space-y-4">
                <Summary />
                <Experience />
                <OpenSource projects={projects} />
                <Skills />
                <Education />
                <Certification />
            </div>
        </div>
    );
};

export { Resume };
