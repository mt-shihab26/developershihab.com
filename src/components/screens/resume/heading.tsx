import type { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
    return <h2 className="font-bold text-blue-600 uppercase border-b pb-1">{children}</h2>;
};

export { Heading };
