import { use, useEffect, useState } from "react";
import ConnectWalletSection from "./connectWalletSection";
import NoMembershipSection from "./noMembershipSection";
import MembershipSection from "./membershipSection";
import ManageAccountSection from "./manageAccountSection";
import ManageFobSection from "./manageFobSection";
import NewFobSection from "./newFobSection";

export enum sections {
  ConnectWalletSection,
  NoMembershipSection,
  MembershipSection,
  ManageAccountSection,
  NewFobSection,
  ManageFobSection,
  UserInfoSection,
  VouchManagementSection,
}

export const UserParentComponent = () => {
  const [user, setUser] = useState<string>("");
  const [inUserList, setInUserList] = useState<boolean>(false);
  const [walletNumber, setWalletNumber] = useState<string>("0000");
  const [fobNumber, setFobNumber] = useState<string>("");
  const [hasFob, setHasFob] = useState<boolean>(false);
  const [validUntil, setValidUntil] = useState<string>("");

  const [isLog, setIsLog] = useState<boolean>(false);
  const [section, setSection] = useState<sections>(sections.MembershipSection);

  const onUserInput = (user: string) => {
    const userList = ["Guillermo", "Juan", "Pedro"];
    if (user) {
      setInUserList(userList.includes(user));
      // inUserList ? "" :
      console.log(`Value: ${userList.includes(user)}`);
    }
    // inUserList ? "User name already exists" : undefined;
  };

  useEffect(() => {
    onUserInput(user);
  }, [user]);

  const props = { setSection, section };

  const isMember = true;
  const isConnect = true;

  switch (section) {
    case sections.MembershipSection:
      if (!isConnect) {
        return <ConnectWalletSection {...props} />;
      }
      if (!isMember) {
        return (
          <NoMembershipSection
            inUserList={inUserList}
            user={user}
            setUser={setUser}
            {...props}
          />
        );
      }
      return (
        <MembershipSection
          user={user}
          walletNumber={walletNumber}
          fobNumber={fobNumber}
          {...props}
        />
      );
    case sections.ManageAccountSection:
      return (
        <ManageAccountSection
          user={user}
          walletNumber={walletNumber}
          fobNumber={fobNumber}
          {...props}
        />
      );
    case sections.NewFobSection:
      return (
        <NewFobSection
          user={user}
          validUntil={validUntil}
          setValidUntil={setValidUntil}
          setFobNumber={setFobNumber}
          {...props}
        />
      );
    case sections.ManageFobSection:
      return (
        <ManageFobSection
          validUntil={validUntil}
          setValidUntil={setValidUntil}
          fobNumber={fobNumber}
          setSection={setSection}
        />
      );
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
