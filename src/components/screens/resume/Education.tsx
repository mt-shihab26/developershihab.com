import type { TEducation } from '@/types';

import { Card, CardContent } from '@/components/ui/card';

import educations from '@/config/educations';

import Section from './Section';

const Item = ({ education }: { education: TEducation }) => {
	const { institute, department, date, logo, alt, description, points } = education;

	return (
		<Card className="relative bg-primary-foreground">
			<CardContent className="p-5">
				{logo && (
					<img
						src={logo}
						alt={alt || ''}
						className="mb-3 h-12 w-auto lg:absolute lg:-left-16 lg:mb-0"
					/>
				)}
				<div className="flex flex-col gap-y-1.5">
					<h2 className="text-lg font-medium text-foreground">{institute}</h2>
					<p className="text-muted-foreground">{department}</p>
					<p className="text-muted-foreground">{description}</p>
					{points && points?.length > 0 && (
						<ul className="ml-4 list-disc text-muted-foreground">
							{points.map((point, index) => (
								<li key={index}>{point}</li>
							))}
						</ul>
					)}
					<time className="text-muted-foreground">{date}</time>
				</div>
			</CardContent>
		</Card>
	);
};

const Education = () => (
	<Section title="Education">
		{educations.map((education, index) => (
			<Item key={index} education={education} />
		))}
	</Section>
);

export default Education;
