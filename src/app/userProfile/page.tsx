"use client";
import { AppContainer } from "@/components/containers/appContainer";
import { UserInfoContainer } from "@/layout/userProfile/userInfo";
import { Box } from "@mui/material";
import { useMeasure } from "react-use";

export default function UserProfile() {
  return (
    <Box>
      <UserInfoContainer />
    </Box>
  );
}
