import type { JSX } from "solid-js";

type TAs = keyof JSX.IntrinsicElements | Component;

type TIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => JSX.Element;

export { TAs, TIcon };
