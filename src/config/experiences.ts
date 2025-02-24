import { finnext, systech } from "~/lib/assets";
import { frameworks, languages, tools } from "./tools_uses";

const experiences = [
    {
        company: "Finnext",
        role: "Developer Lead",
        start: "May 2023",
        end: "Present",
        logo: finnext.src,
        description:
            "Working as a full-stack developer handling development of applications, plugins development, and deployment. Responsible for ongoing maintenance, bug fixes, and implementing new features.",
        highlights: [
            "Developed and maintained multiple Laravel-based web applications",
            "Built responsive front-end interfaces using React and Tailwind CSS",
            "Implemented automated deployment pipelines and CI/CD workflows",
            "Optimized application performance and database queries"
        ]
    },
    {
        company: "Systech Digital LTD",
        role: "Software Engineer - Intern",
        start: "Jun 2024",
        end: "Sep 2024",
        logo: systech.src,
        description:
            "Gained hands-on experience in software development working with modern technologies and best practices.",
        highlights: [
            "Collaborated with senior developers on various projects",
            "Assisted in developing WordPress plugins and themes",
            "Participated in code reviews and technical discussions",
            "Learned industry-standard development workflows"
        ]
    }
];

const educations = [
    {
        institution: "Daffodil International University",
        degree: "BSc in Computer Science and Engineering",
        period: "2020 - 2024",
        description:
            "Focused on software engineering, web development, and database management systems."
    }
];

const skills = [languages, frameworks, tools];

export { educations, experiences, skills };
