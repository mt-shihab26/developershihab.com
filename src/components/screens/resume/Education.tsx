import type { TEducation } from '@/types';

import educations from '@/config/educations';

import Section from './Section';

const Item = ({ education }: { education: TEducation }) => {
	const { institute, department, date, logo, alt, description, points } = education;

	return (
		<div className="relative rounded-2xl border border-border bg-primary-foreground px-5 py-3 text-muted-foreground">
			{logo && (
				<img
					src={logo}
					alt={alt || ''}
					className="mb-3 h-12 w-auto lg:absolute lg:-left-16 lg:mb-0"
				/>
			)}
			<div className="flex flex-col gap-y-1.5">
				<h2 className="text-lg font-medium text-foreground">{institute}</h2>
				<p>{department}</p>
				<p>{description}</p>
				{points && points.length > 0 && (
					<ul className="ml-4 list-disc">
						{points.map((point, index) => (
							<li key={index}>{point}</li>
						))}
					</ul>
				)}
				<time>{date}</time>
			</div>
		</div>
	);
};

const Education = () => {
	return (
		<Section title="Education">
			{educations.map((education) => (
				<Item education={education} />
			))}
		</Section>
	);
};

export default Education;
