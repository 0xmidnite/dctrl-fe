import { Box, Typography } from '@mui/material';
import React from 'react'

interface TTComboProp {
    title: string;
    message: string;
}

const TitleTextCombo: React.FC<TTComboProp> = ( { message, title } ) => {
 
  return (
    <Box>
        <Typography gutterBottom style={{ 
            fontSize: '2.5rem', 
            fontWeight: 800,
            textAlign: "center",
            color: "textPrimary"}}>
            {title}
        </Typography>
        <Typography gutterBottom style={{ 
            fontSize: '1.5rem', 
            fontWeight: 200,
            textAlign: 'center',
            color: "textPrimary",
            margin: 50,
            fontFamily: '"Segoe UI"'}}>
            {message}
        </Typography>
    </Box>
  )
}

export default TitleTextCombo