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

export type TEducationPosition = {
    title: string;
    year: string;
    description: string;
    skills: string[];
};

export type TEducation = {
    company: string;
    positions: TEducationPosition[];
};
