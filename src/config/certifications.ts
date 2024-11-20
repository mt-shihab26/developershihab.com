import lws from '@/assets/learn-with-sumit.png';

export type TCertification = {
	title: string;
	href: string;
	description: string;
	date: string;
	logo: ImageMetadata;
	alt: string;
};

const certifications: TCertification[] = [
	{
		title: 'Think in a Redux way Course (Learn with Sumit)',
		href: 'https://learnwithsumit.com/certificates/verify/LWSCTXN-RUP3O34K',
		description: `
            Shihab Mahamud participated in Learn with Sumit Platform presents
            "Think in a Redux Way" course and performed exceptionally well.
            Not only that, he was one of the First Top 10 Students of the course.
            He completed all the modules very seriously and participated in all
            the quizzes & all the assignments with excellent results. He appeared in
            the Final Examination of the course and scored 95.33% marks. Learn with
            Sumit Platform believes he can be an excellent resource for any web
            development company. We wish him continued success in life.
        `,
		date: 'Fab 2023 - Apr 2023',
		logo: lws,
		alt: 'Think in a Redux way Course Certificate'
	}
];

export default certifications;
