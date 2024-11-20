import { cn } from "@/lib/utils";

interface TextEmphasisProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    className?: string;
}

const I = ({ children, className, ...props }: TextEmphasisProps) => {
    return (
        <span className={cn("font-semibold italic text-foreground", className)} {...props}>
            {children}
        </span>
    );
};

export default I;
