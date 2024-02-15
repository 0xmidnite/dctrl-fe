import { MouseEventHandler } from "react";

// These are all for the ContextProvider and merged into one type to be passed as the type for the creation of the Context.
export interface UserFormContext {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  isNew: boolean;
  setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
  hasFob: boolean;
  setHasFob: React.Dispatch<React.SetStateAction<boolean>>;
  isLog: boolean;
  setIsLog: React.Dispatch<React.SetStateAction<boolean>>;
  onUserInput?: (value: string) => void;
}

export interface ScreenContext {
  screenSize: number;
  setScreenSize: React.Dispatch<React.SetStateAction<number>>;
}

export type InterfaceContext = UserFormContext & ScreenContext;

// These are all individual interfaces
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
