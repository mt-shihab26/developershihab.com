import type { TNode } from "@/types";

import { cn } from "@/lib/utils";

const Label = ({
    children,
    href,
    className,
    title,
    target
}: {
    children: TNode;
    title: string;
    className?: string;
    href?: string;
    target?: "_blank";
}) => {
    const classes = cn(
        "flex flex-row items-center justify-center gap-x-2",
        href && "transition-all hover:opacity-75",
        className
    );

    if (href) {
        return (
            <a className={classes} href={href} target={target}>
                {children}
                <p>{title}</p>
            </a>
        );
    }
    return (
        <div className={classes}>
            {children}
            <p>{title}</p>
        </div>
    );
};

export default Label;
