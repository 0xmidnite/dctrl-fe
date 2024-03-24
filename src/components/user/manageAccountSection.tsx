import { Box, Button, Grid, Typography } from "@mui/material";
import { CustomGeneralButton, MainTitle } from "..";
import { Stack, TypographyProps } from "@mui/system";
import { Dispatch, SetStateAction } from "react";
import { sections } from "./userParentComponent";
import { CaretDoubleLeft } from "@phosphor-icons/react";

const ManageAccountSection: React.FC<{
  user: string;
  walletNumber: string;
  fobNumber: string;
  setSection: Dispatch<SetStateAction<sections>>;
}> = ({ user, walletNumber, fobNumber, setSection }) => {
  const typographyItemProps: TypographyProps = {
    fontSize: "16px",
  };

  const onBack = () => {
    setSection(sections.MembershipSection);
  };

  return (
    <Box>
      <MainTitle
        mainTitle="Manage User Profile"
        subtext="Here you change or update any information related to your User Profile. Update your User Name or manipulate the NFT representing your account."
      />
      <Box sx={{ mt: "26px" }}>
        <Grid
          container
          spacing="64px"
          alignItems="stretch"
          justifyContent="center"
          mb="80px"
        >
          <Grid item>
            <Stack
              direction={"column"}
              alignContent={"center"}
              alignItems={"center"}
            >
              <Box
                component="img"
                sx={{
                  width: 300,
                  height: 300,
                }}
                alt="Dogo Logo"
                src="nft/Luffy_profile.jpeg"
              />
              <Typography
                marginTop={"16px"}
                marginBottom={"32px"}
                {...typographyItemProps}
              >
                {walletNumber}
              </Typography>
            </Stack>
          </Grid>
          <Grid item marginTop={"50px"}>
            <Typography fontSize={"20px"} fontWeight={800} mb="16px">
              User Info.
            </Typography>
            <Typography {...typographyItemProps} marginBottom={"32px"}>
              <b>User name:</b> {user}
              <br />
              <b>Role:</b> {"Undefined"}
              <br />
              <b>FOB #:</b> {fobNumber}
              <br />
              <b>FOB EXP:</b> N/A
              <br />
              <b>Vouches:</b> 0
            </Typography>
            <CustomGeneralButton title="Update Name" onClick={() => {}} />
          </Grid>
          <Grid item marginTop={"48px"}>
            <Box>
              <Stack
                direction={"column"}
                spacing={"15px"}
                alignItems={"center"}
              >
                <Typography fontSize={"20px"} fontWeight={800}>
                  Manage Membership Image
                </Typography>
                <CustomGeneralButton
                  title="Choose NFT From Wallet"
                  onClick={() => {}}
                />
                <CustomGeneralButton title="Upload Image" onClick={() => {}} />
                <CustomGeneralButton
                  title="Create DCTRL Image"
                  onClick={() => {}}
                />

                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  onClick={onBack}
                  sx={{
                    textAlign: "center",
                    alignContent: "center",
                    marginLeft: { xs: 20, sm: 25, md: 30, lg: 35 },
                  }}
                >
                  <CaretDoubleLeft size={18} />
                  Back
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ManageAccountSection;
