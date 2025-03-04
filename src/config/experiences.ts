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
            "Working as a lead developer handling development of applications, plugins, and deployment with the team. I am also responsible for ongoing maintenance, bug fixes, and implementing new features.",
        highlights: [
            "Built WordPress plugin for paystubhero.com that handled 20k+ paystub document PDF generation.",
            "Rewrote paystubhero.com WordPress plugin into a full-featured Laravel SaaS application with React frontend, including document generators with step-by-step forms, customer profile page, and admin dashboard.",
            "Built Laravel SaaS application with React frontend for quickdoctorsnote.com that generates customized doctor's notes.",
            "Also handled those application's deployment and CI/CD pipelines with DigitalOcean servers.",
            "Continued to work on paystubhero.com maintenance with bug fixes and new feature development for over 2+ years.",
            "Lead software development team at Finnext. Took technical decisions for Finnext's clients."
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
            "Completed internship as part of last semester diploma program in Systech Digital LTD's Software Developer Team (Laravel)",
        highlights: [
            "Built a web application with raw PHP by following Laravel-like software structure.",
            "Built a full-featured Laravel E-commerce web application with admin panel and store website.",
            "Worked on projects with senior developers. Learned industry best practices."
        ]
    }
];

const educations = [
    {
        institution: "Faridpur Polytechnic Institute",
        description: "Focused on computer science foundamentals, programming, problem solving.",
        location: "Faridpur, Bangladesh",
        degree: "Diploma in Engineering, Computer Science",
        period: "2020 - 2024"
    }
];

const certifications = [
    {
        name: "Think in a Redux way Course (Learn with Sumit)",
        date: "Fab 2023 - Apr 2023",
        link: "https://learnwithsumit.com/certificates/verify/LWSCTXN-RUP3O34K"
    }
];

const skills = [languages, frameworks, others];

export { certifications, educations, experiences, skills };
