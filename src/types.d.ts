import type { ReactNode, SVGProps } from "react";

export type TNode = ReactNode;

export type TIcon = (props: SVGProps<SVGSVGElement>) => TNode;

export type TTool = {
    name: string;
    description: string;
    href: string;
    icon: TIcon;
};
