import { Card, CardContent } from '@/components/ui/card';

import certifications, { type TCertification } from '@/config/certifications';

import Section from './Section';

const Item = ({ certification }: { certification: TCertification }) => {
	const { title, description, date, logo, alt, href } = certification;

	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			<Card className="relative transition-all hover:border-foreground/25 hover:shadow-sm">
				<CardContent className="p-5">
					{logo && (
						<img
							src={logo.src}
							alt={alt || ''}
							className="mb-3 h-11 w-auto lg:absolute lg:-left-16 lg:mb-0"
						/>
					)}
					<div className="flex flex-col gap-y-1.5">
						<h2 className="text-lg font-medium text-foreground">{title}</h2>
						<p className="text-muted-foreground">{description}</p>
						<time className="text-muted-foreground">{date}</time>
					</div>
				</CardContent>
			</Card>
		</a>
	);
};

const Certification = () => {
	return (
		<Section title="Certifications">
			{certifications.map((certification) => (
				<Item certification={certification} />
			))}
		</Section>
	);
};

export default Certification;
