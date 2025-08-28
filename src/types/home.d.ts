export type TExperiencePosition = {
    title: string;
    year: string;
    description: string;
    skills: string[];
};

export type TExperience = {
    company: string;
    positions: TExperiencePosition[];
};

export type TEducation = {
    institution: { label: string; link: string };
    positions: {
        title: string;
        year: string;
        description: string[];
    }[];
};
