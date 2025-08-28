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
                    "Developed a **SaaS application** for [PaystubHero](https://paystubhero.com) that generates **3,000+ financial documents monthly**",
                    "Built a **SaaS application** for [QuickDoctorsNote](https://quickdoctorsnote.com)",
                    "Maintained application servers with continuous **bug fixes** and **feature updates**",
                    "Created and maintained custom **WordPress plugins** and websites",
                ],
                skills: [
                    "PHP",
                    "TypeScript",
                    "Laravel",
                    "WordPress",
                    "React",
                    "Inertia.js",
                    "TailwindCSS",
                    "shadcn/ui",
                    "MySQL",
                    "Redis",
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
                    "Developed a **Laravel-based e-commerce platform** with an **admin panel**",
                    "Built a **custom web application** using PHP with a Laravel-inspired architecture",
                    "Collaborated with senior developers to implement **industry best practices**  ",
                ],
                skills: ["PHP", "Laravel", "TailwindCSS", "MySQL"],
            },
        ],
    },
];
