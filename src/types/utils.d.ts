import type { JSX } from "solid-js";

type TAsProps = keyof JSX.IntrinsicElements | Component;
type TAProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;
type TSvgProps = JSX.SvgSVGAttributes<SVGSVGElement>;

type TIcon = (props: TSvgProps) => JSX.Element;

export { TAProps, TAsProps, TIcon };
