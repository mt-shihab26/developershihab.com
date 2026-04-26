import type { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => (
    <h2 className="border-b border-gray-200 pb-1 font-bold uppercase dark:border-gray-700">
        {children}
    </h2>
);
