import type { TExperience } from '@/types';

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
		projects: [
			{
				name: 'Student Performance Monitoring system',
				href: '/projects/student-performance-monitoring-system?back=/',
				items: [
					{
						label: 'Technologies',
						value: 'PHP, PDO, MySQL, Composer, TailwindCSS'
					},
					{
						label: 'Date',
						value: '23 Jun, 2024 - 6 Jul, 2024'
					},
					{
						label: 'Status',
						value: 'Eeb application written with Raw PHP and MySQL as part of Internship'
					}
				]
			},
			{
				name: 'S-Commerce',
				href: '/projects/scommerce?back=/',
				items: [
					{
						label: 'Technologies',
						value: 'Laravel, PHP, TailwindCSS, SQLite'
					},
					{
						label: 'Date',
						value: '23 Jun, 2024 - 6 Jul, 2024'
					},
					{
						label: 'Status',
						value:
							'Ecommerce web application with Laravel to test my development skill in Internship'
					}
				]
			}
		]
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
