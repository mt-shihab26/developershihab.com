import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import solid from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';

import remarkReadingTime from './src/utils/remarkReadingTime';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeExternalLinks from 'rehype-external-links';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	site: 'https://developershihab.com',
	integrations: [
		icon(),
		solid(),
		sitemap(),
		tailwind({
			applyBaseStyles: false
		}),
		// https://expressive-code.com/reference/configuration/
		expressiveCode({
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
		}),
		mdx()
	],
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['nofollow, noopener, noreferrer'] }]
		],
		remarkRehype: { footnoteLabelProperties: { className: [''] } }
	},
	output: 'static',
	adapter: vercel({ webAnalytics: { enabled: true } })
});

