import { socials } from "@/config/site";

import { CompanyIcon, LinkedinIcon, LocationIcon } from "@/components/composite/icons";

import portrait from "@/assets/portrait.jpg";

import B from "@/components/elements/B";
import ContactEmail from "@/components/elements/ContactEmail";
import DownloadResume from "@/components/elements/DownloadResume";
import I from "@/components/elements/I";
import Label from "./Label";

const Hero = () => {
    return (
        <section className="flex flex-col items-center space-y-5">
            <div className="flex flex-col items-center space-y-2">
                <img
                    src={portrait.src}
                    alt="Shihab Mahamud Profile"
                    className="h-28 w-auto rounded-full bg-[#FFBE98] p-2"
                    loading="eager"
                />
                <h2 className="text-[10px] text-muted-foreground lg:text-base">
                    Programmer | Full-stack Developer | Software Engineer
                </h2>
            </div>
            <p className="mb-5 px-2 text-center text-xl lg:px-16 lg:text-3xl">
                Hello, I'm Shihab. I'm a <B>full-stack developer</B> with{" "}
                <I>3 years of experience</I>, passionate about building{" "}
                <B>impactful web applications</B>. My stack is <I>Laravel</I> and <I>React</I>.
            </p>
            <div className="flex justify-center gap-x-5">
                <ContactEmail />
                <DownloadResume />
            </div>
            <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
                <Label title="Finnext" href="https://finnext.co" target="_blank">
                    <CompanyIcon className="h-5 w-5" />
                </Label>
                <Label title="Dhaka, Bangladesh">
                    <LocationIcon className="h-5 w-5" />
                </Label>
                <Label title="Connect on Linkedin" href={socials.linkedin} target="_blank">
                    <LinkedinIcon className="h-5 w-5 text-foreground/75" />
                </Label>
            </div>
        </section>
    );
};

export default Hero;
