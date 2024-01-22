import { Button } from "@mui/material";
import { FC } from "react";

interface NavButtonProps {
  text: string,
  buttonLink: string
}

export const NavButton: FC<NavButtonProps> = ({ text, buttonLink }) => {

  return (
    <Button
      variant="outlined"
      href={buttonLink}
      size="medium"
      color="primary"
      sx={{
        width: { xs: 100, sm: 150, md: 200, lg: 250 },
      }}
    >
      {text}
    </Button>
  )
}