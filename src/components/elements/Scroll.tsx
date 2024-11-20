import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const Scroll = ({ target }: { target: string }) => {
    const [show, setShow] = useState(false);

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const targetHeader = document.getElementById(target);
        if (!targetHeader) return;

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                setShow(!entry.isIntersecting);
            });
        };

        const observer = new IntersectionObserver(callback);
        observer.observe(targetHeader);

        return () => observer.disconnect();
    }, [target]);

    return (
        <button
            ref={buttonRef}
            aria-label="Back to Top"
            className={cn(
                "z-90 fixed bottom-8 end-4 flex h-8 w-8 items-center justify-center",
                "rounded-full border-2 border-transparent bg-primary-foreground text-3xl",
                "transition-all duration-300 hover:border-border/75 sm:end-8 sm:h-12 sm:w-12",
                show ? "translate-y-0 opacity-100" : "translate-y-28 opacity-0"
            )}
            onClick={() => {
                document.documentElement.scrollTo({ behavior: "smooth", top: 0 });
            }}
        >
            <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                focusable="false"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4.5 15.75l7.5-7.5 7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
};

export default Scroll;
