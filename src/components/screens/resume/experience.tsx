const Experience = () => {
    const workExperience = [
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
    ];

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                Work Experience
            </h2>
            {workExperience.map((job, index) => (
                <div key={index} className="mb-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">
                                {job.company},{" "}
                                <span className="font-normal text-gray-600">{job.location}</span> —{" "}
                                <em>{job.position}</em>
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
    );
};

export { Experience };
