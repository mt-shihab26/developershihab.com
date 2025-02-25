import { finnext, systech } from "~/lib/assets";
import { frameworks, languages, tools } from "./tools_uses";

const experiences = [
    {
        company: "Finnext",
        role: "Lead Developer",
        start: "May 2023",
        end: "Present",
        logo: finnext.src,
        description:
            "Working as a lead developer handling development of applications, plugins development, and deployment with the team. Responsible for ongoing maintenance, bug fixes, and implementing new features.",
        highlights: [
            "Developed and maintained multiple Laravel-based web applications",
            "Built responsive front-end interfaces using React and Tailwind CSS",
            "Implemented wordpress plugin to handle client custom need",
            "Optimized application performance and database queries",
            "Improve and fix bugs of application from customers feedback"
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
            "Assisted in developing Laravel applications",
            "Participated in code reviews and technical discussions",
            "Learned industry-standard development workflows"
        ]
    }
];

const educations = [
    {
        institution: "Faridpur Polytechnic Institute",
        degree: "Diploma in Engineering, Computer Science",
        period: "2020 - 2024",
        description: "Focused on computer science foundamentals, programming, problem solving."
    }
];

const skills = [languages, frameworks, tools];

export { educations, experiences, skills };
