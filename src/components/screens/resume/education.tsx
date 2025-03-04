const Education = () => {
    const education = [
        {
            institution: "Rajshahi University of Engineering and Technology",
            location: "Rajshahi, Bangladesh",
            degree: "BSc. in Computer Science & Engineering",
            year: "2009"
        }
    ];

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                Education
            </h2>
            {education.map((edu, index) => (
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
    );
};

export { Education };
