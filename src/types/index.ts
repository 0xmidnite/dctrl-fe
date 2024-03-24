import { sections } from "@/components/user/userParentComponent";

// These are all for the ContextProvider and merged into one type to be passed as the type for the creation of the Context.
// export interface UserFormContext {
//   user?: string;
//   setUser?: React.Dispatch<React.SetStateAction<string>>;
//   inUserList?: boolean;
//   setInUserList?: React.Dispatch<React.SetStateAction<boolean>>;
//   walletNumber: string;
//   setWalletNumber: React.Dispatch<React.SetStateAction<string>>;
//   hasFob?: boolean;
//   setHasFob?: React.Dispatch<React.SetStateAction<boolean>>;
//   isFobValid?: boolean;
//   setIsFobValid?: React.Dispatch<React.SetStateAction<boolean>>;
//   fobNumber?: string;
//   setFobNumber?: React.Dispatch<React.SetStateAction<string>>;
//   isLog?: boolean;
//   setIsLog?: React.Dispatch<React.SetStateAction<boolean>>;
//   role?: string;
//   setRole?: React.Dispatch<React.SetStateAction<string>>;
//   validUntil?: string;
//   setValidUntil?: React.Dispatch<React.SetStateAction<string>>;
//   section: sections;
//   setSection: React.Dispatch<React.SetStateAction<sections>>;
//   // onUserInput?: (value: string) => void;
//   // onFobInput?: (value: string) => void;
// }

// export interface IScreenContext {
//   screenSize: number;
//   setScreenSize: React.Dispatch<React.SetStateAction<number>>;
// }

// export type InterfaceContext = UserFormContext & IScreenContext;

// These are all individual interfaces
export interface IMainTitleIProps {
  mainTitle: string;
  subtext?: string;
}
export interface ITTComboProp {
  title: string;
  text: string;
}

export interface IRegularTextProp {
  text: string;
}

export interface ICurrency {
  value: string;
  label: string;
}

export interface ICustomGeneralButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}
