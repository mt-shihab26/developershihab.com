import { Projects } from "./projects";

import { Contributions } from "./contributions";
import { Education } from "./education";
import { Experience } from "./experience";
import { Header } from "./header";
import { Skills } from "./skills";
import { Summary } from "./summary";

export const Resume = ({ image }: { image?: boolean }) => {
    return (
        <div className="mx-auto w-full space-y-3 bg-white text-xs leading-5 text-gray-900 dark:bg-black dark:text-white">
            <Header image={image} />
            <Summary />
            <div className="flex gap-6">
                <div className="flex-1 space-y-3">
                    <Experience />
                    <Projects />
                </div>
                <div className="w-50 space-y-3 border-l border-gray-200 pl-6 dark:border-gray-700">
                    <Skills />
                    <Contributions />
                    <Education />
                </div>
            </div>
        </div>
    );
};
