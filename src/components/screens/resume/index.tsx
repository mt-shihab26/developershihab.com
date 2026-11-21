import { Contributions } from "./contributions";
import { Education } from "./education";
import { Experience } from "./experience";
import { Header } from "./header";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Summary } from "./summary";

export const Resume = ({ image }: { image?: boolean }) => {
    return (
        <div className="mx-auto w-full space-y-3 bg-white text-xs text-gray-900 dark:bg-black dark:text-white">
            <Header image={image} />
            <Summary />
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
                <div className="flex-1 space-y-3 sm:pr-6">
                    <Experience />
                    <Projects />
                </div>
                <div className="space-y-3 border-t border-gray-200 pt-3 sm:w-50 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6 dark:border-gray-700">
                    <Contributions />
                    <Skills />
                    <Education />
                </div>
            </div>
        </div>
    );
};
