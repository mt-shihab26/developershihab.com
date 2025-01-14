import finnext from "@/assets/finnext.co.png";
import systech from "@/assets/systech-digital-ltd.png";

export type TExperience = {
    firm: {
        name: string;
        link: string;
        logo: ImageMetadata;
        alt: string;
    };
    roles: {
        position: string;
        description: string;
        points?: string[];
        date: string;
        projects?: string[];
    }[];
};

const experiences: TExperience[] = [
    {
        firm: {
            name: "Finnext",
            link: "https://finnext.co",
            logo: finnext,
            alt: "Finnext logo"
        },
        roles: [
            {
                position: "CTO",
                date: "Sep 2024 - Present",
                description: `
                    Responsible for defining technical strategy, managing the development
                    team, and delivering scalable software solutions.
                `,
                points: [
                    "Rewrote WordPress Plugin into a Laravel application for PayStubHero.com, resulting in a codebase with 80k+ lines of code and 1,400+ commits.",
                    "Currently providing ongoing maintenance, feature updates, and bug fixes to ensure optimal system performance and reliability.",
                    "I developed several Elementor widgets for website design team as well.",
                    "Collaborated with the SEO team to optimize WordPress-based system."
                ]
            },
            {
                position: "Full-stack Developer",
                date: "May 2023 - Sep 2024 | 1 yr 5 mos",
                description: `
                    Designed and developed full-stack applications, ensuring
                    high performance and maintainability across platforms.
                `,
                points: [
                    "Developed and integrated a WordPress plugin for PayStubHero.com that increased monthly sales from $5,000 to $25,000.",
                    "Built a robust WordPress plugin with over 63,570 lines of code and 689 commits over 1.5 years of development.",
                    "Provided continuous maintenance and support to ensure optimal plugin performance and reliability."
                ],
                projects: ["paystubhero-wordpress-plugin"]
            }
        ]
    },
    {
        firm: {
            name: "Systech Digital LTD",
            link: "https://systechdigital.com",
            logo: systech,
            alt: "Systech Digital LTD logo"
        },
        roles: [
            {
                position: "Software Engineer - Intern",
                date: "June 2024 - September 2024",
                description: `
                    Contributed to demo and client projects using Laravel, enhancing
                    my technical skills and understanding of web development.
                `,
                projects: ["s-commerce", "student-performance-monitoring-system"]
            }
        ]
    }
];

export default experiences;
