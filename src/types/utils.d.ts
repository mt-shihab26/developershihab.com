export type THead = {
    title: string;
    description: string;
    keywords?: string[];
};

import type { AnchorHTMLAttributes, ComponentType, HTMLAttributes, ReactElement, SVGProps } from "react";

type TAsProps = keyof JSX.IntrinsicElements | ComponentType<any>;
type TAProps = AnchorHTMLAttributes<HTMLAnchorElement>;
type TSvgProps = SVGProps<SVGSVGElement>;
type TDivProps = HTMLAttributes<HTMLDivElement>;

type TIcon = (props: TSvgProps) => ReactElement;

export { TAProps, TAsProps, TDivProps, TIcon };
