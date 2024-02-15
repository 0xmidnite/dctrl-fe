"use client";
import { ReactNode } from "react";
import { Footer, NavBar } from "@/components";
import ThemeRegistry from "@/components/appProvider/themeRegistry";
import { WagmiProvider } from "wagmi";
import { config } from "@/config/wagmi";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body style={{ height: "100vh", margin: 0 }}>
        <WagmiProvider config={config}>
          <ThemeRegistry>
            <NavBar />
            {children}
            <Footer />
          </ThemeRegistry>
        </WagmiProvider>
      </body>
    </html>
  );
}

export default RootLayout;
