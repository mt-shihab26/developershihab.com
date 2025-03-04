const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <header className="bg-white p-6 rounded-lg shadow mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h1 className="text-4xl font-bold">Your Name</h1>
                    <div className="mt-4 md:mt-0 text-sm text-gray-600">
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:you@example.com"
                                className="text-blue-500 hover:underline"
                            >
                                you@example.com
                            </a>
                        </p>
                        <p>Phone: 123-456-7890</p>
                        <p>Location: City, Country</p>
                        <p>
                            Website:{" "}
                            <a
                                href="https://yourwebsite.com"
                                className="text-blue-500 hover:underline"
                            >
                                yourwebsite.com
                            </a>
                        </p>
                    </div>
                </div>
            </header>
            {/* Work Experience */}
            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
                    Work Experience
                </h2>
                <div className="mb-4">
                    <h3 className="text-xl font-bold">Job Title – Company Name</h3>
                    <span className="text-sm text-gray-600">Month Year – Present</span>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Brief description of your responsibilities and achievements.</li>
                        <li>Key project or contribution with measurable impact.</li>
                        <li>Additional responsibilities or technologies used.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Previous Job Title – Previous Company</h3>
                    <span className="text-sm text-gray-600">Month Year – Month Year</span>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Highlight significant contributions or projects.</li>
                        <li>List key skills or technologies applied.</li>
                    </ul>
                </div>
            </section>
            {/* Projects */}
            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
                    Projects
                </h2>
                <div className="mb-4">
                    <h3 className="text-xl font-bold">Project Name</h3>
                    <p className="text-sm text-gray-600">
                        A short description of the project, its purpose, and the technologies used.
                    </p>
                    <a
                        href="https://github.com/your-repo"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub Repository
                    </a>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Another Project</h3>
                    <p className="text-sm text-gray-600">
                        Brief project overview with notable features or achievements.
                    </p>
                    <a href="https://yourprojectlink.com" className="text-blue-500 hover:underline">
                        View Project
                    </a>
                </div>
            </section>
            {/* Skills */}
            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
                    Skills
                </h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>HTML, CSS, JavaScript</li>
                    <li>TailwindCSS, React, Vue</li>
                    <li>Backend: Node.js, PHP, Laravel</li>
                    <li>Tools: Git, Docker, Linux</li>
                </ul>
            </section>
            {/* Education */}
            <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
                    Education
                </h2>
                <div>
                    <h3 className="text-xl font-bold">Degree Title, Major</h3>
                    <span className="text-sm text-gray-600">University Name, Graduation Year</span>
                    <p className="mt-2 text-sm">
                        Additional details or achievements (e.g., GPA, honors, relevant coursework).
                    </p>
                </div>
            </section>
        </div>
    );
};

export { Resume };
