const Profiles = () => {
    const profiles = [
        { platform: "GitHub", description: "500+ Stars", link: "#" },
        { platform: "LinkedIn", description: "", link: "#" },
        { platform: "StackOverflow", description: "3800+ points", link: "#" },
        { platform: "YouTube", description: "11000+ subscribers", link: "#" }
    ];

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 uppercase mb-4 border-b pb-2">
                Profiles
            </h2>
            <ul>
                {profiles.map((profile, index) => (
                    <li key={index} className="mb-1">
                        <span className="font-semibold">{profile.platform}</span>
                        {profile.description && ` - ${profile.description}`}
                        {profile.link && (
                            <a href={profile.link} className="text-blue-600 hover:underline ml-1">
                                [Link]
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export { Profiles };
