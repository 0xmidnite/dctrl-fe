import { InterfaceContext } from "@/types";
import React, { ReactNode, createContext, use, useState } from "react";

const StateContext = createContext<InterfaceContext | undefined>(undefined);

type SectionClicked = {
  home: boolean;
  learn: boolean;
  onboard: boolean;
  profile: boolean;
};
const initialState: SectionClicked = {
  home: false,
  learn: false,
  onboard: false,
  profile: false,
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string>("");
  const [isNew, setIsNew] = useState(true);
  const [hasFob, setHasFob] = useState(false);
  const [isLog, setIsLog] = useState(false);

  const [screenSize, setScreenSize] = useState<number>(0);
  const [isSectionClicked, setIsSectionClicked] = useState(initialState);

  const handleSectionClick = (section: keyof SectionClicked) => {
    setIsSectionClicked({ ...initialState, [section]: true });
  };

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        isNew,
        setIsNew,
        hasFob,
        setHasFob,
        isLog,
        setIsLog,
        screenSize,
        setScreenSize,
        isSectionClicked,
        setIsSectionClicked,
        handleSectionClick,
      }}
    >
      {/*We always want to return 'children' insde of here which means that whatever is inside of the context will be displayed.*/}
      {children}
    </StateContext.Provider>
  );
};

// This is how to use the activeMenu. This is simply a function that returns the call of the used context but we pass in which context do we want to use. We are telling it to get the Data from the context (useStateContext) by using the context (useContext) and we specify which one (StateContext).
export const useUserContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
