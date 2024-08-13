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

const experiences: TExperience[] = [
	{
		position: 'Software Engineer - Intern',
		firm: {
			name: 'Systech Digital LTD',
			link: 'https://finnext.co',
			logo: '/src/assets/systech-digital-ltd.png',
			alt: 'finnext.co logo'
		},
		date: 'June 2024 - Present',
		description: `
            As a Laravel Software Engineer intern at Systech Digital LTD,
            I gained hands-on experience in developing and optimizing 
            web applications. My role involved building and enhancing 
            backend systems using Laravel This internship strengthened 
            my skills in Laravel development and deepened my understanding
            of modern web technologies.
        `,
		projects: []
	},
	{
		position: 'Full-stack Developer',
		firm: {
			name: 'Finnext.co',
			link: 'https://finnext.co',
			logo: '/src/assets/finnext.co.png',
			alt: 'finnext.co logo'
		},
		date: 'May 2023 - Present',
		description: `
            I am working with Finnext.co as a Full-stack Developer, 
            primarily focusing on their contract-based projects, 
            predominantly with American clients. My responsibilities 
            include both building and maintaining these applications. 
            I have successfully completed several projects and continue 
            to oversee their maintenance.
        `,
		projects: [
			{
				name: 'PaystubHero.com',
				href: '/projects/paystubhero?back=/',
				items: [
					{
						label: 'Technologies',
						value: 'JavaScript, React, PHP, WordPress, mPDF, Stripe, Tailwind'
					},
					{
						label: 'Date',
						value: 'May 2023 - Present'
					},
					{
						label: 'Status',
						value: 'Now maintaining the application, fixing bugs and addingfeatures'
					}
				]
			}
		]
	}
];

export default experiences;
