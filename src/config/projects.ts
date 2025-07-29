export type TProject = {
    type: string;
    name: string;
    description: string;
    technologies: string[];
    startDate: string;
    endDate?: string;
    liveLink: string;
    published: boolean;
    resume: boolean;
};

export const projects: TProject[] = [
    {
        type: "client",
        name: "PaystubHero",
        description:
            "A SaaS application that generates Paystubs, W-2 Forms, 1099 MISC, 1099 NEC, and other financial documents. It has user profile management and a comprehensive admin dashboard for handling administrative tasks.",
        technologies: ["Laravel", "React", "TailwindCSS"],
        startDate: "May 2023",
        liveLink: "https://paystubhero.com",
        published: true,
        resume: true
    },
    {
        type: "client",
        name: "Quick Doctor's Note",
        description:
            "A SaaS application that generates customizable medical notes by following step by step process. It has user profile management and a comprehensive admin dashboard for handling administrative tasks.",
        technologies: ["Laravel", "React", "TailwindCSS"],
        startDate: "Jan 29, 2025",
        endDate: "Mar 3, 2025",
        liveLink: "https://quickdoctorsnote.com",
        published: true,
        resume: false
    },
    {
        type: "oss",
        name: "Quick Redirect Manager",
        description:
            "A lightweight WordPress URL redirection manager plugin that uses WordPress's native options table for storage. Perfect for managing redirects without the overhead of additional database tables.",
        technologies: ["PHP", "WordPress"],
        startDate: "Dec 28, 2024",
        endDate: "Jan 25, 2025",
        liveLink: "https://github.com/p-nerd/quick-redirect-manager",
        published: true,
        resume: true
    },
    {
        type: "oss",
        name: "laravel/breeze",
        description: "Remove tailwind config files on api stack.",
        technologies: ["Laravel", "Breeze", "TailwindCSS"],
        startDate: "May 2023",
        liveLink: "https://github.com/laravel/breeze/pull/444",
        published: false,
        resume: false
    },
    {
        type: "demo",
        name: "Student Performance Analytics",
        description:
            "A web-based application built with raw PHP that streamlines academic performance tracking in educational institutions. Laravel-like code structure for maintainability.",
        technologies: ["PHP", "MySQL", "TailwindCSS"],
        startDate: "June 23, 2024",
        endDate: "July 6, 2024",
        liveLink: "https://github.com/p-nerd/student-performance-analytics",
        published: true,
        resume: true
    },
    {
        type: "demo",
        name: "Swiss",
        description:
            "A versatile collection of web tools designed to simplify your digital life and help you with everyday tasks. Powerful, user-friendly, and privacy-focused — all in one place, all for free, with no sign-up required.",
        technologies: ["TypeScript", "Astro", "TailwindCSS"],
        startDate: "Apr 2025",
        liveLink: "https://github.com/mt-shihab26/swiss",
        published: true,
        resume: true
    },
    {
        type: "demo",
        name: "tic-tac-toe",
        description: "Tic Tac Toe game implemented with SolidJS & MiniMax Algorithm",
        technologies: ["TypeScript", "SolidJS", "TailwindCSS"],
        startDate: "Apr 28, 2024",
        endDate: "May 24, 2024",
        liveLink: "https://github.com/mt-shihab26/tic-tac-toe",
        published: false,
        resume: false
    },
    {
        type: "demo",
        name: "Flow",
        description:
            "A powerful yet intuitive personal finance management platform that puts you in control of your money with Laravel & React",
        technologies: ["Laravel", "React"],
        startDate: "Apr 2025",
        liveLink: "https://github.com/mt-shihab26/flow",
        published: false,
        resume: false
    },
    {
        type: "oss",
        name: "sr.nvim",
        description: "Telescope-powered multi-file search & replace plugin for Neovim.",
        technologies: ["Neovim", "Lua"],
        startDate: "Apr 2025",
        liveLink: "https://github.com/mt-shihab26/sr.nvim",
        published: false,
        resume: false
    }
];
