import type { JSXElement } from "solid-js";

const Button = (props: { children: JSXElement }) => {
    return <button>{props.children}</button>;
};

export default Button;
