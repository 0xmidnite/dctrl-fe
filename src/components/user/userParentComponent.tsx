import { UserFormContext } from "@/types";
import { useEffect, useState } from "react";
import ConnectWalletSection from "./connectWalletSection";

enum sections {
  ConnectWalletSection,
  NoMembershipSection,
  MembershipSection,
  ManageAccountSection,
  NewFobSection,
  ManageFobSection,
  UserInfoSection,
  VouchManagementSection,
}

export const UserParentComponent = (props: UserFormContext) => {
  const [user, setUser] = useState<string>("");
  const [isNew, setIsNew] = useState<boolean>(true);
  const [hasFob, setHasFob] = useState<boolean>(true);
  const [isLog, setIsLog] = useState<boolean>(true);

  const onUserInput = (user: string) => {
    const userList = ["Guillermo", "Juan", "Pedro"];
    setIsNew(userList.includes(user));
    isNew ? "User name already exists" : undefined;
  };

  useEffect(() => {
    onUserInput(user);
  }, [user]);

  const [section, setSection] = useState<sections>(
    sections.ConnectWalletSection
  );

  switch (section) {
    case sections.ConnectWalletSection:
      return <ConnectWalletSection {...props} />;
    case sections.NoMembershipSection:
    case sections.MembershipSection:
    case sections.ManageAccountSection:
    case sections.NewFobSection:
    case sections.ManageFobSection:
    case sections.UserInfoSection:
    case sections.VouchManagementSection:

    default:
      return (
        <>
          Something Generic Should Appear Here Stating That Something Undefined
          has happened.
        </>
      );
  }
};
