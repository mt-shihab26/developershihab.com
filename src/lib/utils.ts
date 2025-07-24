import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names and handle Tailwind CSS conflicts
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

// Format a date into a human-readable string: "September 18, 2020"
export const formatDate = (date: Date | string): string => {
    const d = typeof date === "string" ? new Date(date) : date;

    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};

export const internal = (url: string): boolean => {
    try {
        if (!url || url.startsWith("/") || url.startsWith("#")) {
            return true;
        }
        return false;
    } catch (error) {
        console.warn(`Error parsing URL: ${url}`, error);
        return true;
    }
};
