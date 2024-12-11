import { ReactNode } from "react";

export type ActionButton = {
    content: ReactNode;
    onClick: () => void;
    role?: string;
}