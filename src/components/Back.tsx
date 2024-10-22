import { cn } from '@/utils/tailwind';
import { useEffect, useState } from 'react';

const Back = (p: { href?: string; class?: string }) => {
	const [href, setHref] = useState(p.href || '/');

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		console.log(params.get('back'));
		setHref((prev) => params.get('back') || prev);
	}, []);

	return (
		<a
			className={cn(
				'inline-flex items-center gap-x-1 rounded-lg',
				'border border-border bg-primary-foreground',
				'px-2 py-1 text-sm transition-all hover:bg-input',
				p.class
			)}
			href={href}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"
				></path>
			</svg>
			<p>Back</p>
		</a>
	);
};

export default Back;
