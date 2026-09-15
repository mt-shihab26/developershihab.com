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
                title: "Software Engineer",
                year: "May 2023 – Present",
                description: [
                    "Architected and delivered [paystubhero.com](https://paystubhero.com), a full-stack SaaS platform that generates 5,000+ financial documents monthly. Still maintaining the application from 2023.",
                    "Developed [practicescope.com](https://practicescope.com), an AI-powered dental practice acquisition platform that benchmarks 30+ financial metrics and generates personalized acquisition reports",
                    "Owned end-to-end feature delivery — from database design and API development to React UI and cloud deployment",
                    "Developed and maintained custom WordPress plugins and client websites",
                ],
                skills: [
                    "PHP",
                    "Laravel",
                    "WordPress",
                    "JavaScript/TypeScript",
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
                title: "Software Engineer Intern",
                year: "Jun 2024 – Sep 2024",
                description: [
                    "Designed and built a custom web application using PHP following MVC architecture patterns",
                    "Engineered a full-stack e-commerce platform with Laravel, including a complete admin panel for product and order management",
                    "Collaborated with the development team on Laravel projects and contributed to ongoing Laravel development",
                ],
                skills: ["PHP", "Laravel", "TailwindCSS", "MySQL"],
            },
        ],
    },
];
