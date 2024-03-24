import { Box, Grid, Typography } from "@mui/material";
import { CustomGeneralButton, MainTitle } from "..";
import { Stack, TypographyProps } from "@mui/system";
import { Dispatch, SetStateAction } from "react";
import { sections } from "./userParentComponent";

const MembershipSection: React.FC<{
  user: string;
  walletNumber: string;
  fobNumber: string;
  setSection: Dispatch<SetStateAction<sections>>;
}> = ({ user, walletNumber, fobNumber, setSection }) => {
  const typographyItemProps: TypographyProps = {
    fontSize: "16px",
  };

  return (
    <Box>
      <MainTitle
        mainTitle="User Profile"
        subtext="Here you can see your current Account Status as well as manage your Memebership or your Fob"
      />
      <Box mt={"64px"}>
        <Grid
          container
          spacing="74px"
          alignItems="center"
          justifyContent="center"
          mb="200px"
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
                alt="Luffy Logo"
                src="nft/Luffy_profile.jpeg"
              />
              <Typography marginTop={"16px"} {...typographyItemProps}>
                {walletNumber}
              </Typography>
            </Stack>
          </Grid>
          <Grid item mt={"-32px"}>
            <Stack direction={"column"}>
              <Typography {...typographyItemProps}>
                <b>User name:</b> {user}
                <br />
                <b>Role:</b> {"Undefined"}
                <br />
                <b>FOB #:</b> N/A
                <br />
                <b>FOB EXP:</b> N/A
                <br />
                <b>Vouches:</b> 0
              </Typography>
              <Box
                sx={{
                  mt: "32px",
                }}
              >
                <Stack direction={"column"} spacing={"16px"}>
                  <CustomGeneralButton
                    title="Manage Account"
                    onClick={() => {
                      setSection(sections.ManageAccountSection);
                    }}
                  />
                  <CustomGeneralButton
                    title="Manage Fob NFT"
                    onClick={() => {
                      {
                        fobNumber
                          ? setSection(sections.ManageFobSection)
                          : setSection(sections.NewFobSection);
                      }
                    }}
                  />
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MembershipSection;
