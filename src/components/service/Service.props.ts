import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface ServiceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
    img: string;
    link?: string;
}