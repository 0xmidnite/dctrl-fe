"use client";
import { Stack, Typography } from "@mui/material";
import { useAccount } from "wagmi";

export const UserInfoContainer = () => {
  const { address } = useAccount();
  const fobId = 42069;
  const membershipExpiry = "1969/10/11";

  return (
    <Stack>
      <Typography>Name: {address}</Typography>
      <Typography>Fob ID: {fobId}</Typography>
      <Typography>Expiry: {membershipExpiry}</Typography>
    </Stack>
  );
};
