import { createTheme } from "@mui/material";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  weight: ["400", "500", "700"],
  style: ['normal'],
  subsets: ["latin"],
  preload: true,
  display: 'swap'
});

export const customTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily
  },
  palette: {
    mode: 'dark',
    primary: {
      main: "#fca103"
    }
  }
});
