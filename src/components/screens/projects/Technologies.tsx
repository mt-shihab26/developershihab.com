import { Badge } from '@/components/ui/badge';

const Technologies = ({ technologies }: { technologies: string[] }) => {
	return (
		<div className="mb-4 flex flex-wrap gap-2">
			{technologies.map((technology) => (
				<Badge key={technology} variant="secondary">
					{technology}
				</Badge>
			))}
		</div>
	);
};

export default Technologies;
