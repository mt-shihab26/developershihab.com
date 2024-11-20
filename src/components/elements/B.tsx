import { cn } from '@/lib/utils';

interface TextStrongProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode;
	className?: string;
}

const B = ({ children, className, ...props }: TextStrongProps) => {
	return (
		<span className={cn('font-semibold text-foreground', className)} {...props}>
			{children}
		</span>
	);
};

export default B;
