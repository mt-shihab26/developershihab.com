import { InfoIcon } from '@/components/composite/icons';
import { Button } from '@/components/ui/button';

const DetailsButton = ({ href }: { href: string }) => {
	return (
		<Button variant="default" size="sm" asChild>
			<a href={href}>
				<InfoIcon className="mr-2 h-4 w-4" />
				Details
			</a>
		</Button>
	);
};

export default DetailsButton;
