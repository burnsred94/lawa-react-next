import { ReactNode } from "react";

export interface ParagraphProps {
    type: 'normal-text' | 'dull-text' | 'sub-title-text-normal' | 'sub-title-text-dull';
    children: ReactNode
}