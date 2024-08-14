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
	projects: {
		name: string;
		href: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
		items: {
			label: string;
			value: string;
		}[];
	}[];
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
	points: string[];
};

export type TTool = {
	label: string;
	tools: {
		name: string;
		description: string;
		href: string;
		icon: string;
	}[];
};
