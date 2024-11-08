import { GithubIcon } from '@/components/composite/icons';
import { Button } from '@/components/ui/button';

const GithubButton = ({ href }: { href: string }) => {
	return (
		<Button variant="outline" size="sm" asChild>
			<a href={href} target="_blank" rel="noopener noreferrer">
				<GithubIcon className="mr-2 h-4 w-4" />
				Source
			</a>
		</Button>
	);
};

export default GithubButton;
