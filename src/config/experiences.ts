import { finnext, systech } from "~/lib/assets";

const experiences = [
    {
        company: "Finnext",
        role: "Full-stack Developer",
        period: "May 2023 - Present",
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
        period: "Jun 2024 - Sep 2024",
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

const skills = [
    {
        category: "Frontend",
        technologies: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
        category: "Backend",
        technologies: ["Laravel", "PHP", "Node.js", "MySQL", "PostgreSQL", "REST APIs"]
    },
    {
        category: "Tools & Others",
        technologies: ["Git", "Docker", "AWS", "Linux", "Agile/Scrum", "CI/CD"]
    }
];

export { educations, experiences, skills };
