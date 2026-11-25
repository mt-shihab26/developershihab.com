import type { DeveloperIconProps } from "developer-icons/dist/icon";
import type { ReactElement } from "react";

export type TExperience = {
    company: {
        label: string;
        link: string;
    };
    positions: {
        title: string;
        startDate: string;
        endDate?: string;
        description: string[];
        skills: string[];
    }[];
};

export type TEducation = {
    institution: { label: string; link: string };
    positions: {
        title: string;
        startDate: string;
        endDate?: string;
        description?: string[];
    }[];
};

export type TPullRequest = {
    pr: string;
    prUrl: string;
    description: string;
};

export type TContributionGroup = {
    repo: string;
    repoUrl: string;
    prs: TPullRequest[];
};

export type TProject = {
    slug: string;
    name: string;
    description: string;
    technologies: string[];
    preview?: string;
    source?: string;
    startDate: string;
    endDate?: string;
    caseStudy?: string;
    resume?: boolean;
    priority?: number;
    draft?: boolean;
};

export type TSkill = {
    title: string;
    href: string;
    since?: string;
    level?: "Advanced" | "Intermediate" | "Basic";
    icon?: (props: DeveloperIconProps) => ReactElement;
    resume_title?: string;
    resume_disable?: boolean;
};
