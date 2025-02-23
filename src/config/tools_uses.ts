const languages = {
    title: "Languages",
    items: [
        {
            name: "JavaScript/TypeScript",
            description:
                "My go-to languages for web development, with TypeScript adding type safety and improved developer experience that makes large-scale applications more maintainable and robust."
        },
        {
            name: "PHP",
            description:
                "A versatile server-side language I frequently use with Laravel for building robust web applications, appreciating its mature ecosystem and excellent documentation."
        },
        {
            name: "C/C++",
            description:
                "Systems programming languages I use for performance-critical applications, with C++ being particularly useful for its powerful abstraction capabilities while maintaining close-to-hardware control."
        }
    ]
};

const frameworks = {
    title: "Frameworks",
    items: [
        {
            name: "Laravel",
            description:
                "My preferred PHP framework for its elegant syntax, robust features, and excellent developer experience, making it ideal for rapid application development while maintaining clean code."
        },
        {
            name: "React",
            description:
                "A JavaScript library I use extensively for building interactive user interfaces, particularly appreciating its component-based architecture and vast ecosystem."
        },
        {
            name: "WordPress",
            description:
                "The CMS I rely on for content-driven websites, leveraging its extensive plugin ecosystem and customization capabilities to create tailored solutions."
        },
        {
            name: "TailwindCSS",
            description:
                "My favorite utility-first CSS framework that speeds up UI development with its intuitive class naming and highly customizable design system."
        }
    ]
};

const tools = {
    title: "Tools",
    items: [
        {
            name: "Ghostty",
            description:
                "A modern, GPU-accelerated terminal emulator with excellent performance, clean interface, smooth scrolling, and great tmux integration with ligature support."
        },
        {
            name: "Tmux",
            description:
                "Essential terminal multiplexer for managing multiple sessions, splitting panes, and maintaining development context through detachable workspace sessions."
        },
        {
            name: "Neovim",
            description:
                "My extensively Lua-customized text editor with modal editing, rich plugin ecosystem, efficient command execution, and LSP integration for IDE-like features, with configurations available in my dotfiles repo."
        },
        {
            name: "Git",
            description:
                "Version control system powering all projects, featuring advanced usage of interactive rebasing, cherry-picking, and branch management for clean commit histories and team collaboration."
        },
        {
            name: "Lazygit",
            description:
                "A terminal UI for Git with intuitive branch management, staging, and conflict resolution, featuring Git tree visualization and keyboard shortcuts, integrated directly into my Neovim setup."
        },
        {
            name: "TablePlus",
            description:
                "Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years."
        }
    ]
};

const tools_uses = [
    languages,
    frameworks,
    {
        title: "Devices",
        items: [
            {
                name: "13-inch, MacBook Pro, M2, 8GB RAM (2022 )",
                description:
                    "Coming from an Avita laptop running Ubuntu-based Linux, the M2 MacBook provides better performance, seamless macOS integration, excellent battery life, and superior build quality."
            }
        ]
    },
    tools,
    {
        title: "Productivity",
        items: [
            {
                name: "Be Focused",
                description:
                    "A minimal Pomodoro timer app that enhances productivity through structured work intervals, break periods, and progress tracking with an unobtrusive interface."
            }
        ]
    }
];

export { frameworks, languages, tools, tools_uses };
