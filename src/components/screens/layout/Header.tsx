import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "@/components/composite/icons";

type TLink = {
    label: string;
    href: string;
};

const links: TLink[] = [
    { label: "projects", href: "/projects" },
    { label: "blogs", href: "/blogs" },
    { label: "tools", href: "/tools" }
];

const NavLinks = ({ className = "" }: { className?: string }) => (
    <>
        {links.map((link) => (
            <a
                key={link.label}
                href={link.href}
                className={cn("flex-none text-lg font-medium hover:text-foreground/75", className)}
                aria-label="Nav Menu Item"
            >
                {link.label}
            </a>
        ))}
    </>
);

const ThemeToggle = () => {
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
        <button
            onClick={toggleTheme}
            className="relative rounded-md border border-border p-1.5 transition-all hover:bg-border"
            aria-label="Toggle theme"
        >
            <span className="sr-only">Dark Theme</span>
            <SunIcon
                className={cn(
                    "h-5 w-5 rotate-0 scale-100 transition-all",
                    "dark:hidden dark:-rotate-90 dark:scale-0"
                )}
            />
            <MoonIcon
                className={cn(
                    "hidden h-5 w-5 rotate-90 scale-0 transition-all",
                    "dark:block dark:rotate-0 dark:scale-100"
                )}
            />
        </button>
    );
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative flex h-24 w-full flex-wrap text-sm sm:flex-nowrap sm:justify-start">
            <nav className="mx-auto flex w-full items-center justify-between" aria-label="global">
                <a className="flex-none text-xl font-semibold" href="/" aria-label="Brand">
                    resume
                </a>
                <div className="flex space-x-2 lg:space-x-7">
                    <div className="hidden items-center space-x-7 sm:flex">
                        <NavLinks />
                    </div>
                    <ThemeToggle />
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 sm:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? (
                            <CloseIcon className="h-6 w-6" />
                        ) : (
                            <MenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
                <div
                    className={cn(
                        "absolute left-0 right-0 top-20 z-50 bg-background p-4 shadow-2xl sm:hidden",
                        isMenuOpen ? "block" : "hidden"
                    )}
                >
                    <div className="flex flex-col">
                        <NavLinks className="block w-full py-2" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
