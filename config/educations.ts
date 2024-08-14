import type { TEducation } from '@/types';

const educations: TEducation[] = [
	{
		institute: 'Faridpur Polytechnic Institute',
		department: 'Diploma in Engineering, Computer Science & Technology',
		date: 'Dec 2021 - Nov 2024',
		logo: '/src/assets/faridpur-polytechnic-institute.png',
		alt: 'Faridpur Polytechnic Institute logo',
		points: [
			'Specialized in Computer Science & Technology.',
			'Gained a strong foundation in software development, networking, and hardware.',
			'Developed practical skills to excel in the tech industry.'
		]
	},
	{
		institute: 'Kashiani G.C. Pilot High School',
		department: 'SSC, Science',
		date: 'Jan 2018 - Fab 2020',
		logo: '/src/assets/kashiani-g-c-pilot-high-school.png',
		alt: 'Kashiani G.C. Pilot High School logo',
		points: [
			'Completed Secondary School Certificate (SSC) with a focus on Science.',
			'Acquired a solid understanding of core scientific principles.',
			'Laid the foundation for further studies in engineering and technology.'
		]
	}
];

export default educations;
