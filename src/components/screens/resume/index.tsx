import { Certification } from "./certification";
import { Education } from "./education";
import { Experience } from "./experience";
import { Header } from "./header";
import { OpenSource } from "./open-source";
import { Skills } from "./skills";

const Resume = () => {
    return (
        <div className="leading-5 text-sm space-y-6 w-full mx-auto p-10 bg-white">
            <Header />
            <div className="flex space-x-6">
                <div className="w-[70%] space-y-6">
                    <Experience />
                </div>
                <div className="w-[30%] space-y-6">
                    <Skills />
                    <OpenSource />
                    <Certification />
                    <Education />
                </div>
            </div>
        </div>
    );
};

export { Resume };
