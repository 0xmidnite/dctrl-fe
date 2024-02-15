import { Button } from "@mui/material";
import { FC } from "react";

interface IConnectWalletButtonProps {
  buttonLink?: string;
  onClick?: () => void;
}

export const ConnectWalletButton: FC<IConnectWalletButtonProps> = ({
  buttonLink,
  onClick,
}) => {
  return (
    <Button
      variant="outlined"
      href={buttonLink ?? "./"}
      size="medium"
      color="primary"
      onClick={onClick}
      sx={{
        width: { xs: 100, sm: 150, md: 200, lg: 250 },
        mt: "16px",
        mb: "64px",
      }}
    >
      Connect Wallet
    </Button>
  );
};
