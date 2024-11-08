type TSiteConfig = {
	author: string;
	title: string;
	description: string;
	lang: string;
	ogLocale: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
};

export const siteConfig: TSiteConfig = {
	// Used as both a meta property (src/components/Head.astro) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'Shihab Mahamud',
	// Meta property used to construct the meta title property, found in src/components/Head.astro
	title: 'Shihab Mahamud',
	// Meta property used as the default description meta property
	description: 'Full-stack developer with 3 years of experience. My focus is Laravel & React.',
	// HTML lang property, found in src/components/Head.astro
	lang: 'en-US',
	// Meta property, found in src/components/Head.astro
	ogLocale: 'en_US',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'en-US',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
} as const;

export const socials = {
	email: 'shihab4t@gmail.com',
	github: 'https://github.com/p-nerd',
	devto: 'https://dev.to/p-nerd',
	linkedin: 'https://www.linkedin.com/in/shihab-mahamud',
	x: 'https://x.com/shihabxdev',
	reddit: 'https://www.reddit.com/user/p-nerd/'
} as const;

export const suffixTitle = (title: string) => {
	const titleSeparator = '•';
	return `${title} ${titleSeparator} ${siteConfig.title}`;
};
