export type TProject = {
    name: string;
    type: "core" | "side";
    preview?: string;
    source?: string;
    technologies: string[];
    description: string;
    startDate: string;
    slug: string;
    content: string;
    resume?: boolean;
    priority?: number;
    draft?: boolean;
};
