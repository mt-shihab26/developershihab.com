import type { JSXElement } from "solid-js";

const External = (props: { href: string; children: JSXElement; class?: string }) => {
    return (
        <a href={props.href} class={props.class} target="_blank">
            {props.children}
        </a>
    );
};

export { External };
