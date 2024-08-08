import type { SiteConfig } from '@/types';
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code';

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'SRLEOM',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'astro-theme-resume',
	// Meta property used as the default description meta property
	description: 'The official Astro Resume Theme',
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: 'en-GB',
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: 'en_GB',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'en-GB',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
};

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Blog',
		path: '/blog/'
	}
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
};

export const certifications = [
	{
		heading: 'Think in a Redux way Course (Learn with Sumit)',
		subheading: `
            Shihab Mahamud participated in Learn with Sumit Platform presents 
            "Think in a Redux Way" course and performed exceptionally well. 
            Not only that, he was one of the First Top 10 Students of the course. 
            He completed all the modules very seriously and participated in all 
            the quizzes & all the assignments with excellent results. He appeared in
            the Final Examination of the course and scored 95.33% marks. Learn with 
            Sumit Platform believes he can be an excellent resource for any web 
            development company. We wish him continued success in life.
        `,
		date: 'Fab 2023 - Apr 2023',
		imagePath: '/src/assets/learn-with-sumit.png',
		altText: 'Think in a Redux way Course Certificate',
		href: 'https://learnwithsumit.com/certificates/verify/LWSCTXN-RUP3O34K'
	}
] as const;

export const skills = [
	{
		title: 'Languages',
		tools: ['C/C++', 'JavaScript/TypeScript', 'PHP', 'Elixir']
	},
	{
		title: 'Backend',
		tools: ['Laravel', 'WordPress', 'Phoenix', 'MySQL', 'SQLite']
	},
	{
		title: 'Frontend',
		tools: ['React.js', 'Vue.js', 'TailwindCSS', 'shadcn/ui', 'Astro']
	},
	{
		title: 'Others',
		tools: ['Git', 'Neovim', 'Linux', 'Docker', 'Composer']
	}
] as const;

export const socials = {
	email: 'shihab4t@gmail.com',
	linkedin: 'https://www.linkedin.com/in/shihab-mahamud',
	x: 'https://x.com/shihabmahamud13',
	github: 'https://github.com/p-nerd',
	devto: 'https://dev.to/p-nerd'
} as const;
