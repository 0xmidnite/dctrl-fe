import { Button } from "@mui/material";
import { FC } from "react";
import { ICustomGeneralButtonProps } from "@/types";

export const CustomGeneralButton: FC<ICustomGeneralButtonProps> = ({
  title,
  onClick,
  disabled,
  href,
}) => {
  return (
    <Button
      disabled={disabled ? disabled : false}
      variant="outlined"
      size="medium"
      color="primary"
      onClick={onClick}
      href={href}
      sx={{
        width: { xs: 150, sm: 175, md: 200, lg: 275 },
        textAlign: "start",
      }}
    >
      {title ? title : "Default Title"}
    </Button>
  );
};
