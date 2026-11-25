import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";
import { twMerge } from "tailwind-merge";

import calculateReadingTime from "reading-time";

import MarkdownIt from "markdown-it";

// Separator between inline details, e.g. "4 Sep 2024 • 6 min read"
export const SEPARATOR = "•";

const md = new MarkdownIt();

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const capitalizeFirstLetter = (sentence: string): string => {
    return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`;
};

export const getLineCount = (text: string | undefined): number =>
    (text ?? "").split("\n").filter(line => line.trim() !== "").length;

export const getReadingTime = (text: string | undefined): string => {
    if (!text) return "unknown";
    try {
        const { minutes } = calculateReadingTime(toString(fromMarkdown(text)));
        if (minutes && minutes > 0) {
            return `${Math.ceil(minutes)} min read`;
        }
        return "unknown";
    } catch (e) {
        return "unknown";
    }
};

export const markdownToHtml = (markdown: string, className?: string): string => {
    md.renderer.rules.paragraph_open = () => `<p class="${className}">`;

    return md.render(markdown);
};

export const formatInitials = (fullName: string) => {
    const names = fullName.trim().split(" ");

    if (names.length === 0) return "";
    if (names.length === 1) return names[0].charAt(0).toUpperCase();

    const firstInitial = names[0].charAt(0);
    const lastInitial = names[names.length - 1].charAt(0);

    return `${firstInitial}${lastInitial}`.toUpperCase();
};
