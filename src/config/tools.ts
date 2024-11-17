import {
	ChatgptIcon,
	ClaudeIcon,
	CppIcon,
	DockerIcon,
	GitIcon,
	GoIcon,
	KittyIcon,
	LaravelIcon,
	LinuxIcon,
	NeovimIcon,
	PHPIcon,
	ReactIcon,
	TailwindcssIcon,
	TmuxIcon,
	TodoistIcon,
	TypescriptIcon,
	WordpressIcon
} from '@/components/composite/icons';

import type { TTool } from '@/types';

const tools: { label: string; tools: TTool[] }[] = [
	{
		label: 'Languages',
		tools: [
			{
				name: 'C/C++',
				description: 'DSA, Problem-Solving',
				href: 'https://en.wikipedia.org/wiki/C%2B%2B',
				icon: CppIcon
			},
			{
				name: 'JavaScript/TypeScript',
				description: 'Web Development, Frontend',
				href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
				icon: TypescriptIcon
			},
			{
				name: 'PHP',
				description: 'Web Development, Backend',
				href: 'https://www.php.net',
				icon: PHPIcon
			},
			{
				name: 'Go',
				description: 'As A Programming Language',
				href: 'https://go.dev',
				icon: GoIcon
			}
		]
	},
	{
		label: 'Frameworks',
		tools: [
			{
				name: 'Laravel',
				description: 'The PHP Framework',
				href: 'https://laravel.com',
				icon: LaravelIcon
			},
			{
				name: 'WordPress',
				description: 'Plugin Development',
				href: 'https://wordpress.org',
				icon: WordpressIcon
			},
			{
				name: 'React',
				description: 'A JavaScript library for building user interfaces',
				href: 'https://react.dev',
				icon: ReactIcon
			},
			// {
			// 	name: 'Vue',
			// 	description: 'The Progressive JavaScript Framework',
			// 	href: 'https://vuejs.org/',
			// 	icon: VueIcon
			// },
			{
				name: 'TailwindCSS',
				description: 'The utility-first CSS framework',
				href: 'https://tailwindcss.com',
				icon: TailwindcssIcon
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
				icon: LinuxIcon
			},
			{
				name: 'Kitty',
				description: 'Terminal',
				href: 'https://github.com/kovidgoyal/kitty',
				icon: KittyIcon
			},
			{
				name: 'Tmux',
				description: 'Terminal Multiplexer',
				href: 'https://github.com/tmux/tmux',
				icon: TmuxIcon
			},
			{
				name: 'Neovim',
				description: 'IDE',
				href: 'https://neovim.io',
				icon: NeovimIcon
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
				icon: GitIcon
			},
			{
				name: 'Docker',
				description: 'Containerizer',
				href: 'https://www.docker.com',
				icon: DockerIcon
			},
			{
				name: 'Claude',
				description: 'AI',
				href: 'https://claude.ai',
				icon: ClaudeIcon
			},
			{
				name: 'ChatGPT',
				description: 'AI',
				href: 'https://chat.openai.com/',
				icon: ChatgptIcon
			},
			{
				name: 'Todoist',
				description: 'Todo List',
				href: 'https://todoist.com',
				icon: TodoistIcon
			}
		]
	}
];

export default tools;
