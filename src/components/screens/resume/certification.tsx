const Certification = () => {
    const certifications = [
        {
            name: "Azure Developer Associate certification",
            date: "1 August 2020",
            link: "#"
        }
    ];

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                Certification
            </h2>
            <ul>
                {certifications.map((cert, index) => (
                    <li key={index} className="mb-1">
                        {cert.name} on {cert.date}
                        {cert.link && (
                            <a href={cert.link} className="text-blue-600 hover:underline ml-1">
                                [Link]
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export { Certification };
