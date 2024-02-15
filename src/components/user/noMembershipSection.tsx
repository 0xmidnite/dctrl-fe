import { UserFormContext } from "@/types";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { TitleTextCombo } from "..";

const NoMembershipSection: React.FC<UserFormContext> = (
  props: UserFormContext
) => {
  return (
    <Box maxWidth="100%">
      <Box mt="64px">
        <TitleTextCombo
          title="No Membership associated with this wallet"
          message="Below you can mint your membership NFT. Think of this as your DCTRL wallet for things like your FOB membership, vouches, attributes for NFT, and other badges. It will have its own wallet address to gold all DCTRL assets."
        />
      </Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        * This will trigger an on-chain transaction on OP Mainnet which will
        require OP ETH
      </Typography>
      <Stack
        // textAlign={"center"}
        // alignItems={"center"}
        mt="64px"
        mb={props.isNew ? "105px" : "128px"}
        mx="256px"
        direction="row"
        spacing={"32px"}
        // justifyContent="center"
      >
        <TextField
          error={props.isNew}
          fullWidth
          id="standard-basic"
          label="Enter Username"
          variant="standard"
          onChange={(event) => props.setUser(event.target.value)}
          helperText={props.isNew ? "User name already exists" : undefined}
          sx={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Button
          disabled={props.isNew}
          variant="outlined"
          size="large"
          color="primary"
          // onClick={props.isNew ? undefined : handleButtonClick}
          sx={{
            width: { xs: 100, sm: 150, md: 200, lg: 250 },
            height: "45px",
          }}
        >
          Mint
        </Button>
      </Stack>
    </Box>
  );
};

export default NoMembershipSection;
