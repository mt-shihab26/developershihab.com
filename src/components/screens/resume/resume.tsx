import { Certification } from "./certification";
import { Education } from "./education";
import { Experience } from "./experience";
import { Header } from "./header";
import { OpenSource } from "./open-source";
import { Profiles } from "./profiles";
import { Skills } from "./skills";

export const Resume = () => {
    return (
        <div className="max-w-4xl text-sm space-y-6 mx-auto p-6 bg-white">
            <Header />
            <div className="flex space-x-6">
                <div className="w-[70%] space-y-6">
                    <Experience />
                </div>
                <div className="w-[30%] space-y-6">
                    <Skills />
                    <Profiles />
                    <OpenSource />
                    <Certification />
                    <Education />
                </div>
            </div>
        </div>
    );
};
