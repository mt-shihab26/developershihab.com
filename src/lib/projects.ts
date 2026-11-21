import type { TProject } from "@/types/content";

import { compareDatesDesc } from "@/lib/dates";

export const PROJECT_CATEGORIES = {
    professional: "Production SaaS Products",
    personal: "Side Projects",
    openSource: "Open Source Tools & Plugins",
} as const;

export const professionalProjects: TProject[] = [
    {
        slug: "paystubhero",
        name: "PaystubHero",
        preview: "https://paystubhero.com",
        caseStudy: "/case-studies/paystubhero",
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
        startDate: "May 2023",
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
        startDate: "Aug 2026",
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
        startDate: "Jan 2025",
        resume: true,
        priority: 90,
    },
];

export const personalProjects: TProject[] = [
    {
        slug: "pingr",
        name: "Pingr",
        source: "https://github.com/mt-shihab26/pingr",
        preview: "https://pingr.developershihab.com",
        technologies: ["Laravel", "React", "PHP", "TypeScript", "Inertia.js", "TailwindCSS", "shadcn/ui", "Stripe"],
        description:
            "An uptime monitoring app with public status pages. Queued jobs check sites on a schedule, a live dashboard updates over Reverb, and teams get alerts by email, Slack, or webhook, built with Laravel and React.",
        startDate: "Oct 2026",
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
        startDate: "Aug 2026",
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
        startDate: "Oct 2026",
        resume: true,
        priority: 70,
    },
];

export const openSourceProjects: TProject[] = [
    {
        slug: "orivo",
        name: "Orivo",
        source: "https://github.com/mt-shihab26/orivo",
        technologies: ["Go", "raylib", "Todoist API"],
        description:
            "A desktop Pomodoro timer I built for myself and use every day, written in Go with raylib. It syncs todos with Todoist and logs daily work sessions back to each task.",
        startDate: "Mar 2026",
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
        startDate: "Dec 2024",
        endDate: "Jan 2025",
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
        startDate: "Apr 2025",
        resume: true,
        priority: 70,
    },
];

const allProjects = [...professionalProjects, ...personalProjects, ...openSourceProjects];

export const getProject = (slug?: string): TProject | undefined =>
    slug ? allProjects.find(project => project.slug === slug) : undefined;

/**
 * Published projects, highest priority first, then newest start date first
 */
const publish = (list: TProject[]): TProject[] =>
    list
        .filter(project => !project.draft)
        .sort((a, b) => {
            const priorityA = a.priority ?? 0;
            const priorityB = b.priority ?? 0;

            if (priorityA !== priorityB) return priorityB - priorityA;

            return compareDatesDesc(a.startDate, b.startDate);
        });

export const getProjectsByCategory = () => ({
    professional: publish(professionalProjects),
    personal: publish(personalProjects),
    openSource: publish(openSourceProjects),
});

export const getResumeProjectsByCategory = () => {
    const onResume = (list: TProject[]) => publish(list).filter(project => project.resume);

    return {
        professional: onResume(professionalProjects),
        personal: onResume(personalProjects),
        openSource: onResume(openSourceProjects),
    };
};
