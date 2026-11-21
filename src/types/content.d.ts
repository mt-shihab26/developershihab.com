export type TProject = {
    // Unique id, also used by case studies to link to this project
    slug: string;
    name: string;
    description: string;
    technologies: string[];
    preview?: string;
    source?: string;
    facebook?: string;
    instagram?: string;
    startDate: string;
    endDate?: string;
    // Case study page path, e.g. "/case-studies/paystubhero"
    caseStudy?: string;
    // Show on the resume
    resume?: boolean;
    // Higher numbers are listed first
    priority?: number;
    draft?: boolean;
};
