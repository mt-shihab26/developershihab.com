import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const links = [
    { l: "projects", h: "/projects" },
    { l: "blogs", h: "/blogs" },
    { l: "tools", h: "/tools" }
];

const Header = () => {
    const [theme, setTheme] = useState(() =>
        typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
    );

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.dispatchEvent(new CustomEvent("theme-change", { detail: { theme: newTheme } }));
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <header className="flex h-24 w-full flex-wrap text-sm sm:flex-nowrap sm:justify-start">
            <nav
                className="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center"
                aria-label="global"
            >
                <a className="flex-none text-xl font-semibold" href="/" aria-label="Brand">
                    resume
                </a>
                <div className="flex flex-row items-center justify-center gap-x-5 sm:gap-x-7">
                    {links.map((link) => (
                        <a
                            key={link.l}
                            href={link.h}
                            className="flex-none text-[1.05rem] font-medium hover:text-foreground/75"
                            aria-label="Nav Menu Item"
                        >
                            {link.l}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="relative rounded-md border border-border p-1.5 transition-all hover:bg-border"
                        aria-label="Toggle theme"
                    >
                        <span className="sr-only">Dark Theme</span>
                        <SunIcon
                            className={cn(
                                "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all",
                                "dark:hidden dark:-rotate-90 dark:scale-0"
                            )}
                        />
                        <MoonIcon
                            className={cn(
                                "hidden h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all",
                                "dark:block dark:rotate-0 dark:scale-100"
                            )}
                        />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
