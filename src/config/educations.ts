import fpi from "@/assets/faridpur-polytechnic-institute.png";
import gcpilot from "@/assets/kashiani-g-c-pilot-high-school.png";

export type TEducation = {
    institute: string;
    department: string;
    date: string;
    logo: ImageMetadata;
    alt: string;
    description?: string;
    points?: string[];
};

const educations: TEducation[] = [
    {
        institute: "Faridpur Polytechnic Institute",
        department: "Diploma in Engineering, Computer Science & Technology",
        date: "Dec 2021 - Nov 2024",
        logo: fpi,
        alt: "Faridpur Polytechnic Institute logo",
        description: `
            During this academic curriculum, I first became involved
            with competitive programming. I practiced problem-solving
            using C/C++, solving over 1,200 problems. Later, I began
            learning software development, and before completing my
            studies, I started working with Finnext.co in the second
            year of four-years curriculum.
        `
    },
    {
        institute: "Kashiani G.C. Pilot High School",
        department: "SSC, Science",
        date: "Jan 2018 - Fab 2020",
        logo: gcpilot,
        alt: "Kashiani G.C. Pilot High School logo"
    }
];

export default educations;
