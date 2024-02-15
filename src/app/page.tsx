"use client";
import { TitleTextCombo, Dctrl_Logo, Calendar, NavBar } from "@/components";
// import getGoogleCalendarEvents from "@/components/google/googleCalendarApi";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Smiley } from "@phosphor-icons/react";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   getGoogleCalendarEvents();
  // }, []);

  return (
    <Box>
      <main className="overflow-hidden">
        <Dctrl_Logo />
        <TitleTextCombo
          title="Welcome!"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        {/* <Box sx={{ p: 2, border: '1px dashed grey' }}>
        </Box> */}
        <Calendar />
      </main>
    </Box>
  );
}
