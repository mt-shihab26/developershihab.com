import { useEffect } from "react";

import { MoonIcon } from "~/components/icons/moon-icon";
import { SunIcon } from "~/components/icons/sun-icon";

const DARK_MODE_KEY = "is-dark-mode";

const ThemeToggle = () => {
    useEffect(() => {
        // Initial theme setup
        const isDarkMode = localStorage.getItem(DARK_MODE_KEY);
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        if (isDarkMode === null) {
            // No preference stored, use system preference
            document.documentElement.classList.toggle("dark", darkModeMediaQuery.matches);
        } else {
            // Use stored preference
            document.documentElement.classList.toggle("dark", isDarkMode === "true");
        }

        // Handle view transitions (Astro-specific)
        const handleAfterSwap = () => {
            // Re-apply theme after page transition
            const currentTheme = localStorage.getItem(DARK_MODE_KEY);
            if (currentTheme !== null) {
                document.documentElement.classList.toggle("dark", currentTheme === "true");
            } else {
                // Use system preference if no stored preference
                document.documentElement.classList.toggle("dark", darkModeMediaQuery.matches);
            }
        };

        document.addEventListener("astro:after-swap", handleAfterSwap);

        return () => {
            document.removeEventListener("astro:after-swap", handleAfterSwap);
        };
    }, []);

    const disableTransitionsTemporarily = () => {
        document.documentElement.classList.add("[&_*]:!transition-none");
        window.setTimeout(() => {
            document.documentElement.classList.remove("[&_*]:!transition-none");
        }, 0);
    };

    const toggleMode = () => {
        disableTransitionsTemporarily();
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const isSystemDarkMode = darkModeMediaQuery.matches;
        const isDarkMode = document.documentElement.classList.toggle("dark");

        if (isDarkMode === isSystemDarkMode) {
            localStorage.removeItem(DARK_MODE_KEY);
        } else {
            localStorage.setItem(DARK_MODE_KEY, isDarkMode.toString());
        }
    };

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            className="group cursor-pointer rounded-full bg-white/90 px-3 py-2 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleMode}
        >
            <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-700 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-700" />
            <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-700 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
        </button>
    );
};

export { ThemeToggle };
