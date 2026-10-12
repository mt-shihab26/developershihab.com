import { yearsSince } from "@/lib/utils";

type TExperience = {
    company: {
        label: string;
        link: string;
    };
    positions: {
        title: string;
        year: string;
        description: string[];
        skills: string[];
    }[];
};

export const experiences: TExperience[] = [
    {
        company: {
            label: "Finnext",
            link: "https://finnext.co",
        },
        positions: [
            {
                title: "Software Engineer (Contract)",
                year: "May 2023 – Present",
                description: [
                    "Built [paystubhero.com](https://paystubhero.com) as the only developer, working with one designer. The platform generates 5,000+ financial documents a month, and I have maintained it since launch in 2023.",
                    "Built [practicescope.com](https://practicescope.com), an AI-powered platform for dental practice acquisitions that benchmarks 30+ financial metrics and generates personalized acquisition reports.",
                    "Handled features from start to finish, from database design and API development to the React UI and cloud deployment.",
                    "Built and maintained custom WordPress plugins and client websites.",
                ],
                skills: [
                    "PHP",
                    "Laravel",
                    "WordPress",
                    "JS/TS",
                    "React",
                    "Inertia.js",
                    "TailwindCSS",
                    "shadcn/ui",
                    "Go",
                    "PocketBase",
                ],
            },
        ],
    },
    {
        company: {
            label: "Systech Digital LTD",
            link: "https://systechdigital.com",
        },
        positions: [
            {
                title: "Software Engineer Intern (Diploma Industrial Attachment)",
                year: "Jun 2024 – Sep 2024",
                description: [
                    "Designed and built a custom web application in PHP using the MVC pattern.",
                    "Built a full-stack e-commerce platform with Laravel, including an admin panel for managing products and orders.",
                ],
                skills: ["PHP", "Laravel", "TailwindCSS", "MySQL"],
            },
        ],
    },
];

export const getExperienceYears = (): number => {
    const starts = experiences.flatMap(e => e.positions.map(position => position.year.split(" – ")[0]));
    return Math.max(...starts.map(yearsSince));
};
