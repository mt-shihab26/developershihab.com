import type { JSX } from "solid-js";

import { splitProps } from "solid-js";
import { cn } from "~/lib/utils";

const ContainerOuter = (
    props: {
        ref?: HTMLDivElement;
        class?: string;
        children?: JSX.Element;
    } & JSX.HTMLAttributes<HTMLDivElement>
) => {
    const [local, other] = splitProps(props, ["class", "children", "ref"]);

    return (
        <div ref={local.ref} class={cn("sm:px-8", local.class)} {...other}>
            <div class="mx-auto max-w-7xl lg:px-8">{local.children}</div>
        </div>
    );
};

const ContainerInner = (
    props: {
        ref?: HTMLDivElement;
        class?: string;
        children?: JSX.Element;
    } & JSX.HTMLAttributes<HTMLDivElement>
) => {
    const [local, others] = splitProps(props, ["class", "children", "ref"]);

    return (
        <div ref={local.ref} class={cn("relative px-4 sm:px-8 lg:px-12", local.class)} {...others}>
            <div class="mx-auto max-w-2xl lg:max-w-5xl">{local.children}</div>
        </div>
    );
};

const Container = (
    props: {
        ref?: HTMLDivElement;
        class?: string;
        children?: JSX.Element;
    } & JSX.HTMLAttributes<HTMLDivElement>
) => {
    const [local, others] = splitProps(props, ["children", "ref"]);

    return (
        <ContainerOuter ref={local.ref} {...others}>
            <ContainerInner>{local.children}</ContainerInner>
        </ContainerOuter>
    );
};

export { Container, ContainerInner, ContainerOuter };
