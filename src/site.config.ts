import type { AstroExpressiveCodeOptions } from 'astro-expressive-code';

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
	lang: 'en-GB',
	// Meta property, found in src/components/Head.astro
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
} as const;

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
} as const;

export const socials = {
	email: 'shihab4t@gmail.com',
	linkedin: 'https://www.linkedin.com/in/shihab-mahamud',
	x: 'https://x.com/shihabmahamud13',
	github: 'https://github.com/p-nerd',
	devto: 'https://dev.to/p-nerd'
} as const;
