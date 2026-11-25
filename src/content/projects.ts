import type { TProject } from "@/types/content";

import { dateCompareDesc } from "@/lib/dates";

export const project_categories = {
    professional: "Production SaaS Products",
    personal: "Side Projects",
    open_source: "Open Source Tools & Plugins",
} as const;

export const professional_projects: TProject[] = [
    {
        slug: "paystubhero",
        name: "PaystubHero",
        preview: "https://paystubhero.com",
        case_study: "/case-studies/paystubhero",
        technologies: [
            "Laravel",
            "React",
            "PHP",
            "TypeScript",
            "Inertia.js",
            "TailwindCSS",
            "shadcn/ui",
            "Stripe",
            "Headless Chrome",
            "mPDF",
        ],
        description:
            "A SaaS application that generates paystubs, W-2, W-9, 1099-NEC, 1099-MISC, Schedule C, offer letters, invoices, and other financial documents. Documents are rendered to PDF with headless Chrome and mPDF, and payments go through Stripe.",
        start_date: "May 2023",
        resume: true,
        priority: 100,
    },
    {
        slug: "lucid-margins",
        name: "Lucid Margins",
        preview: "https://lucidmargins.com",
        technologies: [
            "Laravel",
            "React",
            "PHP",
            "TypeScript",
            "Inertia.js",
            "TailwindCSS",
            "shadcn/ui",
            "QuickBooks API",
        ],
        description:
            "A financial analysis SaaS for small businesses and accountants. It syncs QuickBooks Online or Excel/CSV data, tracks 51 KPIs against targets, and builds live PDF and Excel reports. An AI assistant answers questions from the company's data.",
        start_date: "Aug 2026",
        resume: true,
        priority: 95,
    },
    {
        slug: "practicescope",
        name: "PracticeScope",
        preview: "https://practicescope.com",
        technologies: ["Go", "PocketBase", "React", "TypeScript", "TailwindCSS", "shadcn/ui", "Stripe"],
        description:
            "An AI-powered acquisition analysis SaaS for dentists buying a practice. AI extracts 50+ fields from a P&L or tax return, benchmarks 30+ metrics, and sells a personalized acquisition playbook through Stripe. Built with Go and PocketBase.",
        start_date: "Jan 2025",
        resume: true,
        priority: 90,
    },
];

export const personal_projects: TProject[] = [
    {
        slug: "pingr",
        name: "Pingr",
        source: "https://github.com/mt-shihab26/pingr",
        preview: "https://pingr.developershihab.com",
        technologies: ["Laravel", "React", "PHP", "TypeScript", "Inertia.js", "TailwindCSS", "shadcn/ui", "Stripe"],
        description:
            "An uptime monitoring app with public status pages. Queued jobs check sites on a schedule, a live dashboard updates over Reverb, and teams get alerts by email, Slack, or webhook, built with Laravel and React.",
        start_date: "Oct 2026",
        resume: true,
        priority: 110,
    },
    {
        slug: "rawdo",
        name: "Rawdo",
        source: "https://github.com/mt-shihab26/rawdo",
        preview: "https://rawdo.developershihab.com",
        technologies: ["PHP", "TailwindCSS"],
        description:
            "A task management application built from scratch in plain PHP and structured like a small PHP framework, with its own routing, dependency-injection container, database/model layer, validation, and session-based authentication.",
        start_date: "Aug 2026",
        resume: true,
        priority: 100,
    },
    {
        slug: "strokr",
        name: "Strokr",
        source: "https://github.com/mt-shihab26/strokr",
        preview: "https://strokr.developershihab.com",
        technologies: ["React", "TypeScript", "TanStack Start", "TailwindCSS", "GSAP", "Drizzle ORM"],
        description:
            "A keyboard-first typing speed trainer. It gives per-character feedback as you type, charts WPM and accuracy after each test, and keeps a history of past tests.",
        start_date: "Oct 2026",
        resume: true,
        priority: 70,
    },
];

export const open_source_projects: TProject[] = [
    {
        slug: "orivo",
        name: "Orivo",
        source: "https://github.com/mt-shihab26/orivo",
        technologies: ["Go", "raylib", "Todoist API"],
        description:
            "A desktop Pomodoro timer I built for myself and use every day, written in Go with raylib. It syncs todos with Todoist and logs daily work sessions back to each task.",
        start_date: "Mar 2026",
        resume: true,
        priority: 100,
    },
    {
        slug: "quick-redirect-manager",
        name: "Quick Redirect Manager",
        source: "https://github.com/mt-shihab26/quick-redirect-manager",
        technologies: ["PHP", "WordPress", "Plugin"],
        description:
            "A small WordPress plugin for managing URL redirects, used in production on paystubhero.com. It stores them in WordPress's native options table, so it needs no extra database tables.",
        start_date: "Dec 2024",
        end_date: "Jan 2025",
        resume: true,
        priority: 80,
    },
    {
        slug: "swiss",
        name: "Swiss",
        source: "https://github.com/mt-shihab26/swiss",
        preview: "https://swiss.developershihab.com",
        technologies: ["TypeScript", "Astro", "TailwindCSS", "shadcn/ui"],
        description:
            "Free browser-based tools like a QR code generator, password generator, and unit converter. No sign-up required.",
        start_date: "Apr 2025",
        resume: true,
        priority: 70,
    },
];

const all_projects = [...professional_projects, ...personal_projects, ...open_source_projects];

export const getProject = (slug?: string): TProject | undefined =>
    slug ? all_projects.find(project => project.slug === slug) : undefined;

const publish = (list: TProject[]): TProject[] =>
    list
        .filter(project => !project.draft)
        .sort((a, b) => {
            const priorityA = a.priority ?? 0;
            const priorityB = b.priority ?? 0;

            if (priorityA !== priorityB) return priorityB - priorityA;

            return dateCompareDesc(a.start_date, b.start_date);
        });

export const getProjectsByCategory = () => ({
    professional: publish(professional_projects),
    personal: publish(personal_projects),
    open_source: publish(open_source_projects),
});

export const getResumeProjectsByCategory = () => {
    const onResume = (list: TProject[]) => publish(list).filter(project => project.resume);

    return {
        professional: onResume(professional_projects),
        personal: onResume(personal_projects),
        open_source: onResume(open_source_projects),
    };
};
