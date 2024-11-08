import { ExternalLinkIcon } from '@/components/composite/icons';
import { Button } from '@/components/ui/button';

const LiveLinkButton = ({ href }: { href: string }) => {
	return (
		<Button variant="outline" size="sm" asChild>
			<a href={href} target="_blank" rel="noopener noreferrer">
				<ExternalLinkIcon className="mr-2 h-4 w-4" />
				Live
			</a>
		</Button>
	);
};

export default LiveLinkButton;
