import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Login() {
  return (
    <Box sx={{
      alignItems: 'center', 
      my: '16px',
      mx: '64px'
    }}>
        <Typography>
          Use the button below to connect your wallet of choice
        </Typography>   
    </Box>
  )
}
