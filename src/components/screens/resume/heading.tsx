import type { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => {
    return (
        <h2 className="mb-1.5 border-b border-gray-200 text-base font-bold text-blue-600 uppercase dark:border-gray-700 dark:text-blue-500">
            {children}
        </h2>
    );
};
