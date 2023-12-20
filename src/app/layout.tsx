"use client";
import { ReactNode } from "react";
import { Footer, NavBar } from "@/components";
import ThemeRegistry from "@/components/appProvider/themeRegistry";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ThemeRegistry>
          <NavBar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
