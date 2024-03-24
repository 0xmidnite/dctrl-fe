import { Box, Button } from "@mui/material";
import { CustomGeneralButton, MainTitle, TitleTextCombo } from "..";
import { sections } from "./userParentComponent";
import { Dispatch, SetStateAction, useState } from "react";

const ConnectWalletSection: React.FC<{
  setSection: Dispatch<SetStateAction<sections>>;
}> = ({ setSection }) => {
  // const [isWalletNew, setIsWalletNew] = useState<boolean>(true);

  return (
    <Box>
      <MainTitle mainTitle="User Profile" />
      <TitleTextCombo
        title="Connecting a Wallet"
        text="To be able to gain access to all User options, you must first connect your wallet using the button below. If the wallet is not recognized you will go through the Signup process."
      />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignContent: "center",
          justifyContent: "center",
          marginTop: "125px",
          marginBottom: "195px",
        }}
      >
        <CustomGeneralButton
          title="Connect Wallet"
          onClick={() => {
            setSection(sections.MembershipSection);
          }}
        />
      </Box>
    </Box>
  );
};

export default ConnectWalletSection;
