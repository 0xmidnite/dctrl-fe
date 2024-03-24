import { Box, Typography } from "@mui/material";
import React from "react";
import { ITTComboProp } from "@/types";

const TitleTextCombo: React.FC<ITTComboProp> = ({ text, title }) => {
  return (
    <Box>
      <Typography
        gutterBottom
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          textAlign: "center",
          color: "textPrimary",
        }}
        mx="32px"
      >
        {title}
      </Typography>
      <Typography
        gutterBottom
        style={{
          fontSize: "1.5rem",
          fontWeight: 200,
          textAlign: "center",
          color: "textPrimary",
        }}
        marginY="50px"
        marginX="200px"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TitleTextCombo;
