import type { JSXElement } from "solid-js";

const Button = (props: { children: JSXElement }) => {
    return <button class="text-red-500">{props.children}</button>;
};

export default Button;
