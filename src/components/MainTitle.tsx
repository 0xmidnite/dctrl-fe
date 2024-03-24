import React from "react";
import { Typography, Stack } from "@mui/material";
import { IMainTitleIProps } from "@/types";

const MainTitle: React.FC<IMainTitleIProps> = ({ mainTitle, subtext }) => {
  return (
    <Stack alignItems={"center"}>
      <Typography
        style={{
          fontSize: "65px",
          fontWeight: 800,
          textAlign: "center",
          color: "textPrimary",
          marginTop: 55,
          marginBottom: "8px",
        }}
        mx="64px"
      >
        {mainTitle}
      </Typography>

      <Typography
        gutterBottom
        mx={{
          sm: "128px",
          md: "256px",
        }}
        style={{
          fontSize: "25px",
          fontWeight: 200,
          textAlign: "center",
          color: "textPrimary",
        }}
      >
        {subtext}
      </Typography>
    </Stack>
  );
};

export default MainTitle;
