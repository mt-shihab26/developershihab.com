import { finnext, systech } from "~/lib/assets";
import { frameworks, languages, tools } from "./tools_uses";

const experiences = [
    {
        company: "Finnext",
        location: "Dhaka, Bangladesh",
        role: "Lead Software Developer",
        start: "May 2023",
        end: "Present",
        logo: finnext.src,
        description:
            "Working as a lead developer handling development of applications, plugins, and deployment with the team. I am also responsible for ongoing maintenance, bug fixes, and implementing new features.",
        highlights: [
            "Build wordpress plugin for paystubhero.com that handed 20k+ paystub document pdf generated",
            "Rewrote paystubhero.com SaaS application part into full-featured laravel application with react frontend with documents generators step by step form, customer profile page, admin dashboard"
        ]
    },
    {
        company: "Systech Digital LTD",
        location: "Dhaka, Bangladesh",
        role: "Intern Software Engineer",
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
