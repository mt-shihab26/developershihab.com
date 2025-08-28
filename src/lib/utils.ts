import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";
import { twMerge } from "tailwind-merge";

import calculateReadingTime from "reading-time";

import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const capitalizeFirstLetter = (sentence: string): string => {
    return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`;
};

export const getReadingTime = (text: string): string | undefined => {
    if (!text || !text.length) return undefined;
    try {
        const { minutes } = calculateReadingTime(toString(fromMarkdown(text)));
        if (minutes && minutes > 0) {
            return `${Math.ceil(minutes)} min read`;
        }
        return undefined;
    } catch (e) {
        return undefined;
    }
};

export const markdownToHtml = (markdown: string, className?: string): string => {
    md.renderer.rules.paragraph_open = () => `<p class="${className}">`;

    return md.render(markdown);
};
