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
            "Built WordPress plugin for paystubhero.com that handled 20k+ paystub document PDF generation.",
            "Rewrote paystubhero.com wordpress plugin into a full-featured Laravel SaaS application with React frontend, including document generators with step-by-step forms, customer profile page, and admin dashboard.",
            "Build Laravel SaaS application with React frontend for quickdoctorsnote.com that used to generate customization doctor's note.",
            "Also handle those application deployment and ci/cd pipelines with DigitalOcean servers.",
            "Continue to work on paystubhero.com maintenance with bug fixes, new features development over 2+ years"
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
