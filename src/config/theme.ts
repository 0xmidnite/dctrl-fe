import { createTheme } from "@mui/material";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: true
});

export const customTheme = createTheme({
    typography: {
      fontFamily: roboto.style.fontFamily
    },
    palette: {
        mode: 'dark',
    }
});
