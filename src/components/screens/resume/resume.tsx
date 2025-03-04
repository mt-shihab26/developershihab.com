import { Header } from "./header";

export const Resume = () => {
    const data = {
        workExperience: [
            {
                company: "MENTORLOOP",
                location: "Melbourne, Australia",
                position: "Senior Software Engineer",
                duration: "NOVEMBER 2020 – Present",
                responsibilities: ["Build and ship high quality features for Mentorloop customers."]
            },
            {
                company: "SEEK Asia",
                location: "Kuala Lumpur, Malaysia",
                position: "Senior Software Engineer",
                duration: "DECEMBER 2020 – NOVEMBER 2021",
                responsibilities: [
                    "Converted legacy Angular 1.x job creation project into latest React Functional component-based project and now used by 100K+ hirers in 4 different countries.",
                    "Developed GraphQL service for job creation flow which is used by the hirers to save and publish 1000+ of jobs each day.",
                    "Actively contributing to requirement analysis, development and production deployment phases of a feature.",
                    "Participating in cross team collaboration / discussion to finalize schema definition used across multiple services and teams.",
                    "Regularly performing different technical spikes to make the systems better performant and manageable.",
                    "Lead a sub team to deliver new features on time by orchestrating sub-tasks and get them done timely by the team members.",
                    "Participate week-long platform support in each month and respond or troubleshoot if necessary."
                ]
            },
            {
                company: "Nintex",
                location: "Kuala Lumpur, Malaysia",
                position: "Software Developer",
                duration: "FEBRUARY 2019 – NOVEMBER 2020",
                responsibilities: [
                    "Core member of the team and created multiple connectors (SharePoint, Microsoft Teams, Adobe sign, DocuSign) using React, Node and Azure functions (C#).",
                    "Created react based UI components which are now used in Nintex workflow cloud and being used by 1000+ companies.",
                    "Acted as feature lead, meaning, lead the team in each step from assessing the idea to production deployment and delivered high quality product on time to meet the commitment."
                ]
            }
        ],
        skills: {
            language: ["JavaScript (10+ years)", "TypeScript (4+ years)", "C# (10+ years)"],
            framework: ["Node.js (4+ years)", "React.js (3+ years)", "ASP.NET Core (4+ years)"],
            cloud: ["Microsoft Azure (4+ years)", "AWS (1+ years)"],
            other: [
                "GraphQL, Docker, SharePoint, Kubernetes, SQL Server, MongoDB, ElasticSearch, Redis, RabbitMQ"
            ]
        },
        profiles: [
            { platform: "GitHub", description: "500+ Stars", link: "#" },
            { platform: "LinkedIn", description: "", link: "#" },
            { platform: "StackOverflow", description: "3800+ points", link: "#" },
            { platform: "YouTube", description: "11000+ subscribers", link: "#" }
        ],
        openSource: [
            {
                name: "IP Camera browser client",
                tech: "JavaScript",
                description: "Watch IP camera feed from browser using Node and React FC",
                link: "#"
            },
            {
                name: "Terminal in browser",
                tech: "TypeScript",
                description: "Execute OS terminal commands from browser using Express & React FC",
                link: "#"
            },
            {
                name: "Contribute in Fastify.js",
                description: "Fixed `preHandler` from being stuck when requested",
                link: "#"
            },
            {
                name: "AntD customized MERN boilerplate with RBAC",
                tech: "JavaScript",
                description:
                    "A MERN boilerplate repository using Antd-Pro with RBAC feature, following all production best practices.",
                link: "#"
            }
        ],
        certifications: [
            {
                name: "Azure Developer Associate certification",
                date: "1 August 2020",
                link: "#"
            }
        ],
        education: [
            {
                institution: "Rajshahi University of Engineering and Technology",
                location: "Rajshahi, Bangladesh",
                degree: "BSc. in Computer Science & Engineering",
                year: "2009"
            }
        ]
    };

    return (
        <div className="max-w-4xl space-y-6 mx-auto p-6 bg-white">
            <Header />
            <div className="flex flex-col md:flex-row gap-6">
                {/* Main Content */}
                <div className="md:w-2/3">
                    {/* Work Experience */}
                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                            Work Experience
                        </h2>
                        {data.workExperience.map((job, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {job.company},{" "}
                                            <span className="font-normal text-gray-600">
                                                {job.location}
                                            </span>{" "}
                                            — <em>{job.position}</em>
                                        </h3>
                                    </div>
                                    <span className="text-sm text-gray-600">{job.duration}</span>
                                </div>
                                <div className="mt-2">
                                    <p className="text-gray-700 font-medium">Work area:</p>
                                    <ul className="list-disc ml-6 mt-1">
                                        {job.responsibilities.map((responsibility, rIndex) => (
                                            <li key={rIndex} className="text-gray-700 mb-1">
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Sidebar */}
                <div className="md:w-1/3">
                    {/* Skills */}
                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                            Skills
                        </h2>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Language</h3>
                            <ul className="mt-1">
                                {data.skills.language.map((skill, index) => (
                                    <li key={index} className="text-gray-600 mb-1">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Framework</h3>
                            <ul className="mt-1">
                                {data.skills.framework.map((skill, index) => (
                                    <li key={index} className="text-gray-600 mb-1">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Cloud</h3>
                            <ul className="mt-1">
                                {data.skills.cloud.map((skill, index) => (
                                    <li key={index} className="text-gray-600 mb-1">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">
                                Other Technologies
                            </h3>
                            <p className="text-gray-600 mt-1">{data.skills.other}</p>
                        </div>
                    </section>

                    {/* Profiles */}
                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                            Profiles
                        </h2>
                        <ul>
                            {data.profiles.map((profile, index) => (
                                <li key={index} className="mb-1">
                                    <span className="font-semibold">{profile.platform}</span>
                                    {profile.description && ` - ${profile.description}`}
                                    {profile.link && (
                                        <a
                                            href={profile.link}
                                            className="text-blue-600 hover:underline ml-1"
                                        >
                                            [Link]
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Open Source */}
                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                            Open Source Works
                        </h2>
                        <ul>
                            {data.openSource.map((project, index) => (
                                <li key={index} className="mb-3">
                                    <div>
                                        <span className="font-semibold">{project.name}</span>
                                        {project.tech && (
                                            <span className="text-gray-600"> ({project.tech})</span>
                                        )}
                                        :<span className="ml-1">{project.description}</span>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                className="text-blue-600 hover:underline ml-1"
                                            >
                                                [Link]
                                            </a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Certification */}
                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                            Certification
                        </h2>
                        <ul>
                            {data.certifications.map((cert, index) => (
                                <li key={index} className="mb-1">
                                    {cert.name} on {cert.date}
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            className="text-blue-600 hover:underline ml-1"
                                        >
                                            [Link]
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Education */}
                    <section className="mb-6">
                        <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                            Education
                        </h2>
                        {data.education.map((edu, index) => (
                            <div key={index}>
                                <p className="font-semibold">
                                    {edu.institution}, {edu.location} —
                                </p>
                                <p>
                                    {edu.degree}, {edu.year}
                                </p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};
