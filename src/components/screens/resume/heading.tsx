import type { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
    return <h2 className="border-b pb-1 font-bold text-blue-600 uppercase">{children}</h2>;
};

export { Heading };
