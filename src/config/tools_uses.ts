const languages = {
    title: "Languages",
    items: [
        {
            name: "JavaScript/TypeScript",
            duration: "3+ years",
            description:
                "My go-to languages for web development, with TypeScript adding type safety and improved developer experience that makes large-scale applications more maintainable and robust."
        },
        {
            name: "PHP",
            duration: "2+ years",
            description:
                "A versatile server-side language I frequently use with Laravel for building robust web applications, appreciating its mature ecosystem and excellent documentation."
        },
        // {
        //     name: "Python",
        //     description:
        //         "A highly readable and versatile language I use for data analysis, machine learning, and automation tasks, valuing its extensive library ecosystem and rapid development capabilities."
        // },
        // {
        //     name: "Zig",
        //     description:
        //         "A modern systems programming language I explore for its focus on simplicity, performance, and memory safety without garbage collection, offering an interesting alternative to traditional systems languages."
        // },
        {
            name: "C/C++",
            duration: "2+ years",
            description:
                "Systems programming languages I use for performance-critical applications, with C++ being particularly useful for its powerful abstraction capabilities while maintaining close-to-hardware control."
        }
    ]
};

const frameworks = {
    title: "Frameworks",
    items: [
        {
            name: "React",
            duration: "2.5+ years",
            description:
                "A JavaScript library I use extensively for building interactive user interfaces, particularly appreciating its component-based architecture and vast ecosystem."
        },
        {
            name: "Laravel",
            duration: "1.5+ years",
            description:
                "My preferred PHP framework for its elegant syntax, robust features, and excellent developer experience, making it ideal for rapid application development while maintaining clean code."
        },
        {
            name: "WordPress",
            duration: "2+ years",
            description:
                "The CMS I rely on for content-driven websites, leveraging its extensive plugin ecosystem and customization capabilities to create tailored solutions."
        },
        {
            name: "TailwindCSS",
            duration: "2+ years",
            description:
                "My favorite utility-first CSS framework that speeds up UI development with its intuitive class naming and highly customizable design system."
        },
        {
            name: "Inertia.js",
            duration: "8+ months",
            description: ""
        }
    ]
};

const others = {
    title: "Others Technologies",
    items: [
        {
            name: "MySQL",
            description:
                "Relational database management system used for designing efficient schemas, writing optimized queries, and managing data persistence layers across various applications, with experience in performance tuning, replication, and data migration strategies."
        },
        // {
        //     name: "Linux",
        //     description:
        //         "Extensive experience with Linux systems administration, shell scripting, and command-line tools for development environments, server management, and workflow automation across multiple distributions."
        // },
        // {
        //     name: "DigitalOcean",
        //     description:
        //         "Cloud platform utilized for deploying and scaling applications, with expertise in Droplets configuration, load balancing, managed databases, and infrastructure automation through their API and CLI tools."
        // },
        // {
        //     name: "Laravel Forge",
        //     description: ""
        // },
        {
            name: "Git",
            description:
                "Version control system powering all projects, featuring advanced usage of interactive rebasing, cherry-picking, and branch management for clean commit histories and team collaboration."
        },
        {
            name: "Neovim",
            description:
                "My extensively Lua-customized text editor with modal editing, rich plugin ecosystem, efficient command execution, and LSP integration for IDE-like features, with configurations available in my dotfiles repo."
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
    {
        title: "Devices",
        items: [
            {
                name: "13-inch, MacBook Pro, M2, 8GB RAM (2022)",
                description:
                    "Coming from an Avita laptop running Ubuntu-based Linux, the M2 MacBook provides better performance, seamless macOS integration, excellent battery life, and superior build quality."
            }
        ]
    },
    languages,
    frameworks,
    others,
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

export { frameworks, languages, others, tools, tools_uses };
