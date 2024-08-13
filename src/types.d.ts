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
