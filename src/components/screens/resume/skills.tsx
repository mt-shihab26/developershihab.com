const Skills = () => {
    const skills = {
        language: ["JavaScript (10+ years)", "TypeScript (4+ years)", "C# (10+ years)"],
        framework: ["Node.js (4+ years)", "React.js (3+ years)", "ASP.NET Core (4+ years)"],
        cloud: ["Microsoft Azure (4+ years)", "AWS (1+ years)"],
        other: [
            "GraphQL, Docker, SharePoint, Kubernetes, SQL Server, MongoDB, ElasticSearch, Redis, RabbitMQ"
        ]
    };

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                Skills
            </h2>

            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Language</h3>
                <ul className="mt-1">
                    {skills.language.map((skill, index) => (
                        <li key={index} className="text-gray-600 mb-1">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Framework</h3>
                <ul className="mt-1">
                    {skills.framework.map((skill, index) => (
                        <li key={index} className="text-gray-600 mb-1">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Cloud</h3>
                <ul className="mt-1">
                    {skills.cloud.map((skill, index) => (
                        <li key={index} className="text-gray-600 mb-1">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Other Technologies</h3>
                <p className="text-gray-600 mt-1">{skills.other}</p>
            </div>
        </section>
    );
};

export { Skills };
