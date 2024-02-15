import React from "react";
import { Paper, Typography, Container, Box, Stack } from "@mui/material";

const Dctrl_Logo: React.FC = () => {
  return (
    // <Paper elevation={3} style={{ padding: '20px', maxWidth: '700px', margin: 'auto', marginTop: '50px' }}>

    // </Paper>
    <Stack alignItems={"center"}>
      <Box
        component="img"
        sx={{
          width: 300,
          height: 300,
          mt: 20,
        }}
        alt="Dogo Logo"
        src="logo/DCTRL_logo.png"
      />
      <Typography
        style={{
          fontSize: "75px",
          fontWeight: 800,
          textAlign: "center",
          color: "textPrimary",
          marginTop: 25,
          marginBottom: -15,
        }}
      >
        DCTRL
      </Typography>
      <Typography
        gutterBottom
        style={{
          fontSize: "25px",
          fontWeight: 200,
          textAlign: "center",
          color: "textPrimary",
          marginBottom: 250,
        }}
      >
        A Crypto Space For All
      </Typography>
    </Stack>
  );
};

export default Dctrl_Logo;
