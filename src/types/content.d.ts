export type TProject = {
    name: string;
    type: "core" | "side";
    preview?: string;
    sourceCode?: string;
    technologies: string[];
    description: string;
    startDate: string;
    slug: string;
    content: string;
};
