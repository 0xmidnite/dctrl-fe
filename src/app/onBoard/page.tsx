"use client";
import { Box, Button, Grid, Stack } from "@mui/material";
import { TitleTextCombo } from "@/components";
import { MainTitle, CustomGeneralButton } from "@/components";

export default function Learn() {
  return (
    <Box>
      <main className="overflow-hidden">
        <MainTitle
          mainTitle="Become A Member of DCTRL"
          subtext="A place for Crypto"
        />
        <Box mt={"128px"}>
          <TitleTextCombo
            title="What does it mean to become a member?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <TitleTextCombo
            title="What does you get as a Member? / Perks"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <TitleTextCombo
            title="Pricing"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat."
          />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignContent: "center",
              justifyContent: "center",
              marginBottom: "64px",
            }}
          >
            <CustomGeneralButton title="Connect Wallet" href="userProfile" />
          </Box>
        </Box>
      </main>
    </Box>
  );
}
