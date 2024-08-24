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
            I worked at Finnext.co, where I provided custom software solutions. 
            Although primarily a web design agency focused on custom design and 
            branding, they occasionally encountered clients needing custom 
            software solutions. I joined as a Full-stack Web Application Developer, 
            responsible for developing and maintaining these solutions. My main
            project was PaystubHero.com, a SaaS payroll document generator for 
            American employees. I initially built this platform using React and
            a WordPress plugin. After 1.5 years of growth, I rewrote the entire 
            platform using the Laravel framework with React. I still continued 
            to maintain this application, fixing bugs and adding new features. 
            I also contributed to other projects. Below is a list of notable 
            projects I developed or maintained here."
        `,
		projects: [
			{
				name: 'PaystubHero.com',
				href: '/projects/paystubhero?back=/',
				items: [
					{
						value: 'Maintained the WordPress plugin and React app for 1.5 years'
					},
					{
						value: 'Fixed bugs and added new features to the WordPress based System.'
					},
					{
						value: 'Now, rewriting the entire SaaS into the Laravel framework.'
					},
					{
						label: 'Date',
						value: 'May 2023 - Present'
					},
					{
						label: 'WordPress Based',
						value: 'WordPress, PHP, React, JavaScript, TailwindCSS'
					},
					{
						label: 'Laravel Based',
						value: 'Laravel, PHP, React, TypeScript, TailwindCSS'
					}
				]
			}
		]
	}
];

export default experiences;
