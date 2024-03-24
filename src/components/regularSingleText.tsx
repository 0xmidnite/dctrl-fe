import { Box, Typography } from "@mui/material";
import React from "react";
import { IRegularTextProp } from "@/types";

const RegularSingleText: React.FC<IRegularTextProp> = ({ text }) => {
  return (
    <Box>
      <Typography
        gutterBottom
        style={{
          fontSize: "1.5rem",
          fontWeight: 200,
          textAlign: "center",
          color: "textPrimary",
        }}
        my="24px"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default RegularSingleText;
