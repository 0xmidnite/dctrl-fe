import { Button } from "@mui/material";
import { FC } from "react";

export const ConnectWalletButton: FC = () => {
  return (
    <Button
      variant="outlined"
      href={"./"}
      size="medium"
      color="primary"
      sx={{
        width: { xs: 100, sm: 150, md: 200, lg: 250 },
        mt: "16px",
      }}
    >
      Connect Wallet
    </Button>
  );
};
