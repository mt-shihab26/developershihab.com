import type { HTMLAttributes, ReactNode, RefObject } from "react";

import { cn } from "~/lib/utils";

const ContainerOuter = ({
    className,
    children,
    ref,
    ...props
}: HTMLAttributes<HTMLDivElement> & {
    ref?: RefObject<HTMLDivElement>;
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div ref={ref} className={cn("sm:px-8", className)} {...props}>
            <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
        </div>
    );
};

const ContainerInner = ({
    className,
    children,
    ref,
    ...props
}: HTMLAttributes<HTMLDivElement> & {
    ref?: RefObject<HTMLDivElement>;
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div ref={ref} className={cn("relative px-4 sm:px-8 lg:px-12", className)} {...props}>
            <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
    );
};

const Container = ({
    children,
    ref,
    ...props
}: HTMLAttributes<HTMLDivElement> & {
    ref?: RefObject<HTMLDivElement>;
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <ContainerOuter ref={ref} {...props}>
            <ContainerInner>{children}</ContainerInner>
        </ContainerOuter>
    );
};

export { Container, ContainerInner, ContainerOuter };
