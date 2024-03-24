import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { CustomGeneralButton, MainTitle, TitleTextCombo } from "..";
import { Dispatch, SetStateAction } from "react";
import { sections } from "./userParentComponent";

const NoMembershipSection: React.FC<{
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  setSection: Dispatch<SetStateAction<sections>>;
  inUserList: boolean;
}> = ({ user, setUser, setSection, inUserList }) => {
  const handleButtonClick = () => {
    setSection(sections.MembershipSection);
  };

  return (
    <Box>
      <Box>
        <MainTitle mainTitle="No Membersip Associated with this Wallet" />
        <TitleTextCombo
          title=""
          text="Below you can mint your membership NFT. Think of this as your DCTRL wallet for things like your FOB membership, vouches, attributes for NFT, and other badges. It will have its own wallet address to gold all DCTRL assets."
        />
      </Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
          mx: "64px",
          mt: "64px",
        }}
      >
        * This will trigger an on-chain transaction on OP Mainnet which will
        require OP ETH
      </Typography>
      <Stack
        mt="32px"
        mx="256px"
        direction="column"
        spacing={inUserList ? "14px" : "36px"}
        alignItems={"center"}
        sx={{
          marginBottom: "256px",
        }}
      >
        <TextField
          error={inUserList ? true : false}
          fullWidth
          id="standard-basic"
          label="Enter Username"
          variant="standard"
          onChange={(event) => setUser(event.target.value)}
          helperText={inUserList ? "User name already exists" : undefined}
          sx={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <CustomGeneralButton
          title="Mint"
          onClick={handleButtonClick}
          disabled={inUserList || user === "" ? true : false}
        />
      </Stack>
    </Box>
  );
};

export default NoMembershipSection;
