import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";

import calculateReadingTime from "reading-time";

export const formatCapitalized = (sentence: string): string => {
    return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`;
};

export const formatReadingTime = (text: string | undefined): string => {
    if (!text) return "unknown";
    try {
        const { minutes } = calculateReadingTime(toString(fromMarkdown(text)));
        if (minutes && minutes > 0) {
            return `${Math.ceil(minutes)} min read`;
        }
        return "unknown";
    } catch {
        return "unknown";
    }
};

export const formatInitials = (fullName: string) => {
    const names = fullName.trim().split(" ");

    if (names.length === 0) return "";
    if (names.length === 1) return names[0].charAt(0).toUpperCase();

    const firstInitial = names[0].charAt(0);
    const lastInitial = names[names.length - 1].charAt(0);

    return `${firstInitial}${lastInitial}`.toUpperCase();
};
