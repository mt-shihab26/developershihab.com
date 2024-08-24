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
            I joined Systech Digital LTD as an Intern Software Engineer 
            during my Diploma final semester's industrial training program. Initially, 
            I developed demo projects, and later, I contributed to client 
            projects. My work mainly involved the Laravel framework. This 
            internship significantly enhanced my Laravel development skills 
            and expanded my understanding of modern web technologies. 
            Below is a list of projects I did here.
        `,
		projects: [
			{
				name: 'S-Commerce',
				href: '/projects/scommerce?back=/',
				items: [
					{
						value: 'An e-commerce web application built using the Laravel framework.'
					},
					{
						label: 'Technologies',
						value: 'Laravel, PHP, TailwindCSS, SQLite'
					},
					{
						label: 'Date',
						value: '30 Jun, 2024 - Present'
					}
				]
			},
			{
				name: 'Student Performance Monitoring System',
				href: '/projects/student-performance-monitoring-system?back=/',
				items: [
					{
						value: 'A web application written in raw PHP with a Laravel-like structure.'
					},
					{
						label: 'Technologies',
						value: 'PHP, PDO, MySQL, Composer, TailwindCSS'
					},
					{
						label: 'Date',
						value: 'June 23, 2024 - July 6, 2024'
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
