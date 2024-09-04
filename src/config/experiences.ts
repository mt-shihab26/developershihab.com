import type { TExperience } from '@/types';

const experiences: TExperience[] = [
	{
		position: 'Software Engineer - Intern',
		firm: {
			name: 'Systech Digital LTD',
			link: 'https://systechdigital.com',
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
		projects: ['s-commerce', 'student-performance-monitoring-system']
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
            projects I developed or maintained here.
        `,
		projects: ['paystubhero-wordpress-plugin']
	}
];

export default experiences;
