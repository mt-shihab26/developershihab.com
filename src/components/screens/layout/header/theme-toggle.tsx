import { MoonIcon } from "~/components/icons/moon-icon";
import { SunIcon } from "~/components/icons/sun-icon";

const ThemeToggle = () => {
    const disableTransitionsTemporarily = () => {
        document.documentElement.classList.add("**:transition-none!");
        window.setTimeout(() => {
            document.documentElement.classList.remove("**:transition-none!");
        }, 0);
    };

    const toggleMode = () => {
        disableTransitionsTemporarily();
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const isSystemDarkMode = darkModeMediaQuery.matches;
        const isDarkMode = document.documentElement.classList.toggle("dark");

        if (isDarkMode === isSystemDarkMode) {
            localStorage.removeItem("isDarkMode");
        } else {
            localStorage.setItem("isDarkMode", isDarkMode.toString());
        }
    };

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            class="group cursor-pointer rounded-full bg-white/90 px-3 py-2 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleMode}
        >
            <SunIcon class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-700 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-700" />
            <MoonIcon class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-700 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
        </button>
    );
};

export { ThemeToggle };
