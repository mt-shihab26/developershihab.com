export type TPosition = {
    title: string;
    year: string;
    description: string;
    skills: string[];
};

export type TExperience = {
    company: string;
    positions: TPosition[];
};
