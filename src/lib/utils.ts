import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
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
