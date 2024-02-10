import { Stack } from "@mui/material";
import { FC, ReactNode } from "react";

export const AppContainer: FC<{ children: ReactNode; minHeight: number }> = ({
  children,
  minHeight,
}) => {
  return (
    <Stack
      width={"100hw"}
      minHeight={minHeight}
      height={{
        xs: "100%",
        sm: "calc(100vh - 0px)",
        md: "calc(100vh - 0px)",
      }}
      justifyContent={"center"}
      alignItems={"center"}
      mx={4}
    >
      {children}
    </Stack>
  );
};
