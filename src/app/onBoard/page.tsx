"use client";
import { Box, Grid, Stack } from "@mui/material";
import { TitleTextCombo, Dctrl_Logo } from "@/components";
import { NavButton } from "@/components/buttons/NavBarButtons";
import { MainTitle, UserForm }from "@/components";

export default function Learn() {
  return (
    <Box>
      <main className="overflow-hidden">
        <MainTitle mainTitle="Become A Member of DCTRL" subtext="A place for Crypto"/>
        <TitleTextCombo 
          title="What does it mean to become a member?" 
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <TitleTextCombo 
          title="What does you get as a Member? / Perks" 
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <TitleTextCombo 
          title="Pricing" 
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        
        <Stack 
          textAlign={"center"}
          alignItems={"center"} 
          margin={8}
        >
          <UserForm/>
        </Stack> 
      </main>
    </Box>
  );
}