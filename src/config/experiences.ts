import { finnext, systech } from "~/lib/assets";
import { frameworks, languages, others } from "./tools_uses";

export const experiences = [
    {
        company: "Finnext",
        location: "Dhaka, Bangladesh",
        role: "Full-stack Developer",
        start: "May 2023",
        end: "Present",
        logo: finnext.src,
        highlights: [
            "Architected and developed a Laravel/React SaaS application that generates 3000+ financial documents monthly (PaystubHero.com), increasing revenue by supporting multiple document types (Paystubs, W-2 Forms, 1099 MISC/NEC)",
            "Built comprehensive Laravel/React application for QuickDoctorsNote.com, expanding the company's SaaS portfolio with a new revenue stream",
            "Established robust CI/CD pipelines on DigitalOcean servers, improved deployment efficiency",
            "Led technical decision-making for client projects and mentored junior developers"
        ]
    },
    {
        company: "Systech Digital LTD",
        location: "Dhaka, Bangladesh",
        role: "Software Engineer Intern",
        start: "Jun 2024",
        end: "Sep 2024",
        logo: systech.src,
        highlights: [
            "Built custom web application using PHP following Laravel-inspired architecture"
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

export { certifications, educations, skills };
