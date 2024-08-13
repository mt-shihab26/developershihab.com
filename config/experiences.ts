import type { TExperience } from '@/types';

const experiences: TExperience[] = [
	{
		position: 'Software Engineer - Intern',
		firm: {
			name: 'Systech Digital LTD',
			link: 'https://finnext.co',
			logo: '/src/assets/systech-digital-ltd.png',
			alt: 'Systech Digital LTD logo'
		},
		date: 'June 2024 - Present',
		description: `
            As a Software Engineer Intern at Systech Digital LTD, 
            I gained practical experience in developing and optimizing 
            web applications. My role involved building and enhancing 
            backend systems using Laravel. This internship significantly 
            strengthened my Laravel development skills and broadened my 
            understanding of modern web technologies.
        `,
		projects: [
			{
				name: 'Student Performance Monitoring System',
				href: '/projects/student-performance-monitoring-system?back=/',
				items: [
					{
						label: 'Technologies',
						value: 'PHP, PDO, MySQL, Composer, TailwindCSS'
					},
					{
						label: 'Date',
						value: 'June 23, 2024 - July 6, 2024'
					},
					{
						label: 'Status',
						value: 'Web application developed with raw PHP and MySQL as part of my internship'
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
						value: '30 Jun, 2024 - Present'
					},
					{
						label: 'Status',
						value:
							'E-commerce web application built with Laravel to demonstrate my development skills during the internship'
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
			alt: 'Finnext.co logo'
		},
		date: 'May 2023 - Present',
		description: `
            I am working as a Full-stack Developer at Finnext.co, 
            focusing primarily on contract-based projects for American clients. 
            My responsibilities include developing, maintaining, and overseeing 
            various web applications. I have successfully completed several projects 
            and continue to provide ongoing maintenance and feature enhancements.
        `,
		projects: [
			{
				name: 'PaystubHero.com',
				href: '/projects/paystubhero?back=/',
				items: [
					{
						label: 'Technologies',
						value: 'JavaScript, React, PHP, WordPress, mPDF, Stripe, TailwindCSS'
					},
					{
						label: 'Date',
						value: 'May 2023 - Present'
					},
					{
						label: 'Status',
						value: 'Currently maintaining the application, fixing bugs, and adding new features'
					}
				]
			}
		]
	}
];

export default experiences;
