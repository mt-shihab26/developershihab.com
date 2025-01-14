import { useRef } from "react";

import { Card } from "@/components/ui/card";

import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";

interface Achievement {
    id: string;
    description: string;
}

interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    achievements: Achievement[];
}

interface Education {
    degree: string;
    school: string;
    year: string;
}

interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    summary: string;
}

interface ResumeData {
    personalInfo: PersonalInfo;
    skills: string[];
    experience: Experience[];
    education: Education;
    certifications: string[];
}

const Resume: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    const resumeData: ResumeData = {
        personalInfo: {
            name: "John Doe",
            title: "Senior Software Engineer",
            email: "john.doe@email.com",
            phone: "+1 (555) 123-4567",
            github: "github.com/johndoe",
            linkedin: "linkedin.com/in/johndoe",
            summary:
                "Experienced software engineer with 8+ years of expertise in full-stack development, cloud architecture, and team leadership. Passionate about creating scalable solutions and mentoring junior developers."
        },
        skills: [
            "JavaScript/TypeScript",
            "React.js",
            "Node.js",
            "Python",
            "AWS",
            "Docker",
            "Kubernetes",
            "GraphQL",
            "MongoDB",
            "PostgreSQL",
            "System Design",
            "Agile/Scrum"
        ],
        experience: [
            {
                id: "1",
                company: "Tech Solutions Inc.",
                position: "Senior Software Engineer",
                period: "2020 - Present",
                achievements: [
                    {
                        id: "1a",
                        description:
                            "Led a team of 6 engineers in developing a microservices-based e-commerce platform"
                    },
                    {
                        id: "1b",
                        description:
                            "Reduced system response time by 40% through optimization of database queries"
                    },
                    {
                        id: "1c",
                        description: "Implemented CI/CD pipeline reducing deployment time by 60%"
                    }
                ]
            },
            {
                id: "2",
                company: "Innovation Labs",
                position: "Software Engineer",
                period: "2017 - 2020",
                achievements: [
                    {
                        id: "2a",
                        description: "Developed RESTful APIs serving 1M+ daily requests"
                    },
                    {
                        id: "2b",
                        description:
                            "Architected real-time analytics dashboard using React and WebSocket"
                    },
                    {
                        id: "2c",
                        description:
                            "Mentored 4 junior developers, conducting code reviews and pair programming sessions"
                    }
                ]
            }
        ],
        education: {
            degree: "B.S. Computer Science",
            school: "University of Technology",
            year: "2017"
        },
        certifications: [
            "AWS Certified Solutions Architect",
            "Google Cloud Professional Developer",
            "MongoDB Certified Developer"
        ]
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            {/* Resume Content */}
            <Card className="mx-auto max-w-4xl bg-white p-8 shadow-lg" ref={targetRef}>
                {/* Header Section */}
                <header className="mb-8">
                    <h1 className="mb-2 text-4xl font-bold text-gray-800">
                        {resumeData.personalInfo.name}
                    </h1>
                    <h2 className="mb-4 text-2xl text-blue-600">{resumeData.personalInfo.title}</h2>

                    <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                            <MailIcon className="h-4 w-4" />
                            <span>{resumeData.personalInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneIcon className="h-4 w-4" />
                            <span>{resumeData.personalInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GithubIcon className="h-4 w-4" />
                            <span>{resumeData.personalInfo.github}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <LinkedinIcon className="h-4 w-4" />
                            <span>{resumeData.personalInfo.linkedin}</span>
                        </div>
                    </div>
                </header>

                {/* Summary Section */}
                <section className="mb-8">
                    <h3 className="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                        Professional Summary
                    </h3>
                    <p className="text-gray-600">{resumeData.personalInfo.summary}</p>
                </section>

                {/* Skills Section */}
                <section className="mb-8">
                    <h3 className="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                        Technical Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-8">
                    <h3 className="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                        Professional Experience
                    </h3>
                    {resumeData.experience.map((exp) => (
                        <div key={exp.id} className="mb-6">
                            <div className="mb-2 flex items-start justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        {exp.company}
                                    </h4>
                                    <h5 className="text-blue-600">{exp.position}</h5>
                                </div>
                                <span className="text-gray-600">{exp.period}</span>
                            </div>
                            <ul className="list-inside list-disc space-y-1 text-gray-600">
                                {exp.achievements.map((achievement) => (
                                    <li key={achievement.id} className="ml-4">
                                        {achievement.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Education Section */}
                <section className="mb-8">
                    <h3 className="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                        Education
                    </h3>
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">
                                {resumeData.education.degree}
                            </h4>
                            <p className="text-gray-600">{resumeData.education.school}</p>
                        </div>
                        <span className="text-gray-600">{resumeData.education.year}</span>
                    </div>
                </section>

                {/* Certifications Section */}
                <section>
                    <h3 className="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                        Certifications
                    </h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                        {resumeData.certifications.map((cert, index) => (
                            <li key={index} className="ml-4">
                                {cert}
                            </li>
                        ))}
                    </ul>
                </section>
            </Card>
        </div>
    );
};

export default Resume;
