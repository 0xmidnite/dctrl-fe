import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import { IMainTitleIProps } from '@/types' 

const MainTitle: React.FC<IMainTitleIProps> = ({ mainTitle, subtext }) => {
  return (
    <Stack alignItems={"center"} > 
      <Typography style={{ 
        fontSize: '75px', 
        fontWeight: 800,
        textAlign: 'center',
        color: "textPrimary",
        marginTop: 75,
        marginBottom: -15}}
        mx="25px"
      >
        {mainTitle}
      </Typography>
      
      <Typography gutterBottom style={{ 
        fontSize: "25px", 
        fontWeight: 200,
        textAlign: 'center',
        color: "textPrimary",
        marginBottom: 150}}
      >
          {subtext}
      </Typography>
    </Stack>
  )
}

export default MainTitle;