import { Box } from "@mui/material";
import { ReactNode } from "react";
import { NavBar, Footer } from ".";

const CenterBoxComponent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        // This is for some reason not working properly with the NoMembershipSection when the screen becomes smaller.
        minHeight: "calc(100vh - 255px)",
      }}
    >
      {children}
    </Box>
  );
};

export default CenterBoxComponent;
