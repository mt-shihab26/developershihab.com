import type { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => (
    <h2 className="border-b pb-1 text-sm font-bold text-blue-600 uppercase dark:text-blue-500">{children}</h2>
);
