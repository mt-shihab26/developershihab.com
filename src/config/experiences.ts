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
        date: string;
        projects: string[];
    }[];
};

const experiences: TExperience[] = [
    {
        firm: {
            name: "Finnext.co",
            link: "https://finnext.co",
            logo: finnext,
            alt: "Finnext.co logo"
        },
        roles: [
            {
                position: "CTO",
                date: "May 2023 - Present",
                description: `
                    I worked at Finnext.co, where I provided custom software solutions.
                    Although primarily a web design agency focused on custom design and
                    branding, they occasionally encountered clients needing custom
                    software solutions. I joined as a Full-stack Web Application Developer,
                    responsible for developing and maintaining these solutions. My main
                    project was PaystubHero.com, a SaaS payroll document generator for
                    American employees. I initially built this platform using React and
                    a WordPress plugin. After 1.5 years of growth, I rewrote the entire
                    platform using the Laravel framework with React. I still continued
                    to maintain this application, fixing bugs and adding new features.
                    I also contributed to other projects. Below is a list of notable
                    projects I developed or maintained here.
                `,
                projects: ["paystubhero-wordpress-plugin"]
            },
            {
                position: "Full-stack Developer",
                date: "May 2023 - Present",
                description: `
                    I worked at Finnext.co, where I provided custom software solutions.
                    Although primarily a web design agency focused on custom design and
                    branding, they occasionally encountered clients needing custom
                    software solutions. I joined as a Full-stack Web Application Developer,
                    responsible for developing and maintaining these solutions. My main
                    project was PaystubHero.com, a SaaS payroll document generator for
                    American employees. I initially built this platform using React and
                    a WordPress plugin. After 1.5 years of growth, I rewrote the entire
                    platform using the Laravel framework with React. I still continued
                    to maintain this application, fixing bugs and adding new features.
                    I also contributed to other projects. Below is a list of notable
                    projects I developed or maintained here.
                `,
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
                    I joined Systech Digital LTD as an Intern Software Engineer
                    during my Diploma final semester's industrial training program. Initially,
                    I developed demo projects, and later, I contributed to client
                    projects. My work mainly involved the Laravel framework. This
                    internship significantly enhanced my Laravel development skills
                    and expanded my understanding of modern web technologies.
                    Below is a list of projects I did here.
                `,
                projects: ["s-commerce", "student-performance-monitoring-system"]
            }
        ]
    }
];

export default experiences;
