import type { ReactNode, SVGProps } from "react";

export type TNode = ReactNode;

export type TIcon = (props: SVGProps<SVGSVGElement>) => TNode;
