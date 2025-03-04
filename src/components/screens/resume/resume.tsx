const Resume = () => {
    // Project information from the pasted content
    const projects = [
        {
            name: "PaystubHero",
            period: "Apr 2023 - Present",
            description:
                "A SaaS application that generates Paystubs, W-2 Forms, 1099 MISC, 1099 NEC, and other financial documents. It has user profile management and a comprehensive admin dashboard for handling administrative tasks.",
            technologies: ["Laravel", "React", "TailwindCSS"],
            link: "/projects/paystubhero",
            linkType: "Case Study"
        },
        {
            name: "Quick Doctor's Note",
            period: "Jan 2025 - Mar 2025",
            description:
                "A SaaS application that generates customizable medical notes by following step by step process. It has user profile management and a comprehensive admin dashboard for handing administrative tasks.",
            technologies: ["Laravel", "React", "TailwindCSS"],
            link: "https://quickdoctorsnote.com",
            linkType: "Live"
        },
        {
            name: "Quick Redirect Manager",
            period: "Dec 2024 - Jan 2025",
            description:
                "A lightweight WordPress URL redirection manager plugin that uses WordPress's native options table for storage. Perfect for managing redirects without the overhead of additional database tables.",
            technologies: ["PHP", "WordPress"],
            link: "https://github.com/p-nerd/quick-redirect-manager",
            linkType: "Github"
        },
        {
            name: "Student Performance Analytics",
            period: "Jun 2024 - Jul 2024",
            description:
                "A web-based application built with raw PHP that streamlines academic performance tracking in educational institutions. Laravel-like code structure for maintainability.",
            technologies: ["PHP", "MySQL", "TailwindCSS"],
            link: "https://github.com/p-nerd/student-performance-analytics",
            linkType: "Github"
        }
    ];

    // Experience information
    const experiences = [
        {
            company: "Finnext",
            role: "Lead Software Developer",
            period: "May 2023 - Present",
            description:
                "Working as a lead developer handling development of applications, plugins development, and deployment with the team. Responsible for ongoing maintenance, bug fixes, and implementing new features.",
            highlights: [
                "Developed and maintained multiple Laravel-based web applications",
                "Built responsive front-end interfaces using React and Tailwind CSS",
                "Implemented WordPress plugins to handle client custom needs",
                "Optimized application performance and database queries",
                "Improved and fixed bugs of applications from customer feedback"
            ]
        },
        {
            company: "Systech Digital LTD",
            role: "Software Engineer - Intern",
            period: "Jun 2024 - Sep 2024",
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

    // Education information
    const educations = [
        {
            institution: "Faridpur Polytechnic Institute",
            degree: "Diploma in Engineering, Computer Science",
            period: "2020 - 2024",
            description: "Focused on computer science fundamentals, programming, problem solving."
        }
    ];

    // Skills
    const skills = {
        languages: ["JavaScript/TypeScript", "PHP", "C/C++"],
        frameworks: ["Laravel", "React", "WordPress", "TailwindCSS"],
        tools: ["Git", "Linux", "Tmux", "Neovim"]
    };

    return (
        <div className="max-w-4xl mx-auto my-8 px-4 font-sans bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
            {/* Header Section */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Shihab Mahamud</h1>
                <h2 className="text-2xl text-zinc-600 dark:text-zinc-400 mb-4">
                    Full-stack Developer
                </h2>
                <p className="text-lg mb-4 text-zinc-600 dark:text-zinc-400">
                    I'm a full stack Laravel Developer who builds frontends with React. I also work
                    on WordPress plugin development sometimes. I lead the software development team
                    at Finnext, where I build & manage applications and plugins development,
                    deployment with our team. I handle ongoing maintenance, bug fixes, and
                    implementation of new features.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <a
                        href="mailto:shihab4t@gmail.com"
                        className="text-teal-600 dark:text-teal-500 hover:underline"
                    >
                        shihab4t@gmail.com
                    </a>
                    <span className="text-zinc-400">|</span>
                    <a
                        href="https://github.com/p-nerd"
                        className="text-teal-600 dark:text-teal-500 hover:underline"
                    >
                        github.com/p-nerd
                    </a>
                    <span className="text-zinc-400">|</span>
                    <a
                        href="https://developershihab.com"
                        className="text-teal-600 dark:text-teal-500 hover:underline"
                    >
                        developershihab.com
                    </a>
                </div>
            </header>

            {/* About Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                    About Me
                </h2>
                <div className="text-zinc-600 dark:text-zinc-400 space-y-4">
                    <p>
                        After completing high school in 2020, I began programming with{" "}
                        <strong>C</strong>, solving 1100+ competitive programming problems and
                        gaining a strong foundation in data structures and algorithms over 1.5
                        years.
                    </p>
                    <p>
                        I transitioned to web development, starting with Node.js and React, and now
                        specialize in Laravel and React for building dynamic full-stack
                        applications. I also have experience in WordPress plugin development and
                        have worked contractually with Finnext on several notable projects.
                    </p>
                    <p>
                        As a developer, I believe in writing clean, maintainable code and following
                        best practices. I'm experienced with modern development workflows and enjoy
                        mentoring junior developers and contributing to open-source projects
                        whenever possible.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                    Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <h3 className="font-semibold mb-2">Languages</h3>
                        <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
                            {skills.languages.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
                        <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
                            {skills.frameworks.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Tools</h3>
                        <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
                            {skills.tools.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                    Experience
                </h2>
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-4 border-teal-500 pl-4">
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-zinc-600 dark:text-zinc-400">
                                    {exp.company}
                                </span>
                                <span className="text-zinc-500 dark:text-zinc-500 text-sm">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                                {exp.description}
                            </p>
                            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
                                {exp.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                    Notable Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">{project.name}</h3>
                                <span className="text-zinc-500 dark:text-zinc-500 text-sm">
                                    {project.period}
                                </span>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 text-xs rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="text-teal-600 dark:text-teal-500 flex items-center text-sm hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg viewBox="0 0 24 24" className="h-4 w-4 mr-1">
                                    <path
                                        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                {project.linkType}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-4">
                    Education
                </h2>
                <div className="space-y-4">
                    {educations.map((edu, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold">{edu.institution}</h3>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-zinc-600 dark:text-zinc-400">
                                    {edu.degree}
                                </span>
                                <span className="text-zinc-500 dark:text-zinc-500 text-sm">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer - Call to Action */}
            <footer className="mt-12 border-t border-zinc-200 dark:border-zinc-700 pt-6">
                <p className="text-center text-zinc-600 dark:text-zinc-400">
                    Interested in transforming your ideas into impactful software solutions? I am
                    open for work.
                    <a
                        href="mailto:shihab4t@gmail.com"
                        className="text-teal-600 dark:text-teal-500 ml-1 hover:underline"
                    >
                        Let's build together.
                    </a>
                </p>
            </footer>
        </div>
    );
};

export { Resume };
