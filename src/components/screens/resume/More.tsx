import { cn } from '@/lib/utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	children: React.ReactNode;
}

const More = ({ className, href, target, children, ...props }: LinkProps) => {
	return (
		<a
			className={cn(
				'rounded-xl border border-border bg-primary-foreground px-3 py-1 transition-all hover:border-foreground/25 hover:shadow-sm',
				className
			)}
			href={href}
			target={target}
			{...props}
		>
			{children}
		</a>
	);
};

export default More;
