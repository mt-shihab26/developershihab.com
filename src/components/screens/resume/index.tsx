import type { TProject } from "~/lib/projects";

import { Certification } from "./certification";
import { Education } from "./education";
import { Experience } from "./experience";
import { Header } from "./header";
import { OpenSource } from "./open-source";
import { Skills } from "./skills";
import { Summary } from "./summary";

const Resume = ({ projects, image }: { projects: TProject[]; image?: boolean }) => {
    return (
        <div className="mx-auto w-full space-y-4 bg-white p-8 text-sm leading-5">
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
