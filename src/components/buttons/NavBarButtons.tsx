import { UserFormContext } from "@/types";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavButtonProps {
  button_titlte: string;
  buttonLink?: string;
  onClick?: () => void;
}

export const NavButton: FC<NavButtonProps> = ({
  button_titlte,
  buttonLink,
  onClick,
}) => {
  const curPathname = usePathname();

  return (
    <Button
      variant="outlined"
      href={buttonLink}
      size="medium"
      color="primary"
      onClick={onClick}
      sx={(theme) => ({
        color:
          curPathname === buttonLink ?? "Button"
            ? theme.palette.primary.light
            : "#ffffff",
        width: { xs: 100, sm: 150, md: 200, lg: 250 },
      })}
    >
      {button_titlte}
    </Button>
  );
};