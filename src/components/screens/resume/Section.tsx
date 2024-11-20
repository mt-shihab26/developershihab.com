import type { TNode } from "@/types";

import { cn } from "@/lib/utils";

const Section = ({
    className,
    title,
    children
}: {
    className?: string;
    title: string;
    children: TNode;
}) => {
    return (
        <section className={cn(className, "flex flex-col gap-y-5 lg:flex-row lg:gap-y-0")}>
            <div className="text-xl font-semibold lg:w-1/3">
                <h2>{title}</h2>
            </div>
            <div className="flex flex-col gap-y-3 lg:w-2/3">{children}</div>
        </section>
    );
};

export default Section;
