import { finnext, systech } from "~/lib/assets";
import { frameworks, languages, others } from "./tools_uses";

const experiences = [
    {
        company: "Finnext",
        location: "Dhaka, Bangladesh",
        role: "Lead Software Developer",
        start: "May 2023",
        end: "Present",
        logo: finnext.src,
        description:
            "Lead developer working on application, plugins development, deployment, maintenance, bug fixes, and new feature implementation.",
        highlights: [
            "Built WordPress plugin for paystubhero.com handled 20k+ paystub PDF generations",
            "Rewrote paystubhero.com WordPress plugin into a full-featured Laravel SaaS application with React frontend, including document generators, customer profile page, and admin dashboard.",
            "Built Laravel SaaS application with React frontend for quickdoctorsnote.com that generates customized doctor's notes.",
            "Managed deployment and CI/CD pipelines on DigitalOcean servers",
            "Maintained paystubhero.com with bug fixes and new features for 2+ years",
            "Led development team and made technical decisions for client projects"
        ]
    },
    {
        company: "Systech Digital LTD",
        location: "Dhaka, Bangladesh",
        role: "Software Engineer - Intern",
        start: "Jun 2024",
        end: "Sep 2024",
        logo: systech.src,
        description:
            "Completed internship with Laravel Development Team as part of diploma program",
        highlights: [
            "Built web application using raw PHP with Laravel-like structure",
            "Developed full-featured Laravel E-commerce application with admin panel",
            "Collaborated with senior developers and learned industry best practices"
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

const skills = [languages, frameworks, others];

export { educations, experiences, skills };
