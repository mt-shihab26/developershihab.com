const OpenSource = () => {
    const openSource = [
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
    ];

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                Open Source Works
            </h2>
            <ul>
                {openSource.map((project, index) => (
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
    );
};

export { OpenSource };
