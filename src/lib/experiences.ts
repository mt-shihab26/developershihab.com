import { yearsSince } from "@/lib/dates";

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

const finnextStart = "May 2023";

export const experiences: TExperience[] = [
    {
        company: {
            label: "Finnext",
            link: "https://finnext.co",
        },
        positions: [
            {
                title: "Software Engineer (Contract)",
                year: `${finnextStart} – Present`,
                description: [
                    `Built [paystubhero.com](https://paystubhero.com) as the only developer, working with one designer. The platform generates 5,000+ financial documents a month, and I have maintained it since launch in ${finnextStart.split(" ")[1]}.`,
                    "Built [lucidmargins.com](https://lucidmargins.com), a financial analysis platform that turns QuickBooks Online data into 51 KPIs, live reports, and an AI finance assistant.",
                    "Built [practicescope.com](https://practicescope.com), an AI-powered platform for dental practice acquisitions that benchmarks 30+ financial metrics and generates personalized acquisition reports.",
                    "Handled features from start to finish, from database design and API development to the React UI and cloud deployment.",
                    "Built and maintained custom WordPress plugins and client websites, including Quick Redirect Manager, a URL redirect plugin used in production on paystubhero.com.",
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
                    "Contributed to internal company projects as part of the development team.",
                    "Designed and built a custom web application in PHP using the MVC pattern.",
                    "Built a Laravel e-commerce platform with an admin panel for products and orders.",
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
