import type { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => (
    <h2 className="border-b border-gray-200 pb-1 text-sm font-bold text-blue-600 uppercase dark:border-gray-700 dark:text-blue-500">
        {children}
    </h2>
);
