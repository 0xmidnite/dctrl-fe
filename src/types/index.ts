import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IMainTitleIProps {
    mainTitle: string;
    subtext?: string;
}
export interface ITTComboProp {
    title: string;
    message: string;
}

export interface ICurrency {
    value: string;
    label: string;
}