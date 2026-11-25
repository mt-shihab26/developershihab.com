import type { ReactNode } from "react";

export const E = ({ children, href }: { children: ReactNode; href: string }) => {
    return (
        <a href={href} target="_blank" className="font-bold hover:underline hover:underline-offset-2">
            {children}
        </a>
    );
};
