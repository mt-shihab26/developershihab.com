import type { ReactNode, SVGProps } from 'react';

export type TNode = ReactNode;

export type TIcon = (props: SVGProps<SVGSVGElement>) => TNode;

export type TExperience = {
	position: string;
	firm: {
		name: string;
		link: string;
		logo: string;
		alt: string;
	};
	description: string;
	date: string;
	projects: string[];
};

export type TCertification = {
	title: string;
	href: string;
	description: string;
	date: string;
	logo: string;
	alt: string;
};

export type TSkill = {
	title: string;
	tools: string[];
};

export type TEducation = {
	institute: string;
	department: string;
	date: string;
	logo: string;
	alt: string;
	description?: string;
	points?: string[];
};

export type TTool = {
	label: string;
	tools: {
		name: string;
		description: string;
		href: string;
		icon: TIcon;
	}[];
};
