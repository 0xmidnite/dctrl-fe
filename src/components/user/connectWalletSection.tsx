import { Box } from "@mui/material";
import { ConnectWalletButton, MainTitle, TitleTextCombo } from "..";
import { UserFormContext } from "@/types";
import { UserParentComponent } from "./userParentComponent";

const ConnectWalletSection: React.FC<UserFormContext> = (
  props: UserFormContext
) => {
  const isNew = props.isNew;

  return (
    <Box>
      <MainTitle mainTitle="User Profile" />
      <TitleTextCombo
        title="Connecting a Wallet"
        message="To be able to gain access to all User options, you must first connect your wallet using the button below. If the wallet is not recognized you will go through the Sign-Up process."
      />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignContent: "center",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        {isNew ? (
          <ConnectWalletButton buttonLink="/noMembership" />
        ) : (
          <ConnectWalletButton buttonLink="./" />
        )}
      </Box>

      {/* <Stack textAlign={"center"} alignItems={"center"} margin={8}>
          <UserForm />
        </Stack> */}
    </Box>
  );
};

export default ConnectWalletSection;
