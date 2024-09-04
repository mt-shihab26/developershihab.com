import type { TTool } from '@/types';

const tools: TTool[] = [
	{
		label: 'Languages',
		tools: [
			{
				name: 'C/C++',
				description: 'DSA, Problem-Solving',
				href: 'https://en.wikipedia.org/wiki/C%2B%2B',
				icon: 'cpp'
			},
			{
				name: 'JavaScript/TypeScript',
				description: 'Web Development, Frontend',
				href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
				icon: 'typescript'
			},
			{
				name: 'PHP',
				description: 'Web Development, Backend',
				href: 'https://www.php.net',
				icon: 'php'
			},
			{
				name: 'Go',
				description: 'As A Programming Language',
				href: 'https://go.dev',
				icon: 'go'
			}
			//{
			//	name: 'Elixir',
			//	description: 'Functional Programming',
			//	href: 'https://elixir-lang.org/',
			//	icon: 'elixir'
			//}
		]
	},
	{
		label: 'Frameworks',
		tools: [
			{
				name: 'Laravel',
				description: 'The PHP Framework',
				href: 'https://laravel.com',
				icon: 'laravel'
			},
			{
				name: 'WordPress',
				description: 'Plugin Development',
				href: 'https://wordpress.org',
				icon: 'wordpress'
			},
			//{
			//	name: 'Phoenix',
			//	description: 'The Elixir Framework',
			//	href: 'https://www.phoenixframework.org/',
			//	icon: 'phoenix'
			//},
			{
				name: 'React',
				description: 'A JavaScript library for building user interfaces',
				href: 'https://react.dev',
				icon: 'react'
			},
			// {
			// 	name: 'Vue.js',
			// 	description: 'The Progressive JavaScript Framework',
			// 	href: 'https://vuejs.org/',
			// 	icon: 'vue'
			// },
			{
				name: 'TailwindCSS',
				description: 'The utility-first CSS framework',
				href: 'https://tailwindcss.com',
				icon: 'tailwindcss'
			}
		]
	},
	{
		label: 'Environment',
		tools: [
			{
				name: 'Linux',
				description: 'OS',
				href: 'https://www.kernel.org',
				icon: 'linux'
			},
			{
				name: 'Arc',
				description: 'Browser',
				href: 'https://arc.net',
				icon: 'arc'
			},
			{
				name: 'WezTerm',
				description: 'Terminal',
				href: 'https://wezfurlong.org/wezterm/index.html',
				icon: 'wezterm'
			},
			// {
			// 	name: 'Warp',
			// 	description: 'Terminal',
			// 	href: 'https://www.warp.dev',
			// 	icon: 'warp'
			// },
			{
				name: 'Neovim',
				description: 'IDE',
				href: 'https://neovim.io',
				icon: 'neovim'
			},
			{
				name: 'VS Code',
				description: 'IDE',
				href: 'https://code.visualstudio.com',
				icon: 'vscode'
			}
		]
	},
	{
		label: 'Others',
		tools: [
			{
				name: 'Git',
				description: 'Version Control',
				href: 'https://git-scm.com',
				icon: 'git'
			},
			{
				name: 'Docker',
				description: 'Containerizer',
				href: 'https://git-scm.com',
				icon: 'docker'
			},
			{
				name: 'Todoist',
				description: 'Todo List',
				href: 'https://www.notion.so/product',
				icon: 'todoist'
			},
			{
				name: 'ChatGPT',
				description: 'AI',
				href: 'https://chat.openai.com/',
				icon: 'chatgpt'
			}
		]
	}
];

export default tools;
