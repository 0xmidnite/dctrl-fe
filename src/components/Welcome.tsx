import React from 'react'
import { Paper, Typography, Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Welcome: React.FC = () => {
  return (
    // <Paper elevation={3} style={{ padding: '20px', maxWidth: '700px', margin: 'auto', marginTop: '50px' }}>
        
    // </Paper>
    <Container maxWidth="sm">
        <Typography style={{ 
            fontSize: '5.5rem', 
            fontWeight: 800,
            textAlign: 'center',
            color: "textPrimary",
            marginBottom: 1,
            fontFamily: '"Segoe UI"'}}>
            DCTRL
        </Typography>
        <Typography gutterBottom style={{ 
            fontSize: '1.5rem', 
            fontWeight: 200,
            textAlign: 'center',
            color: "textPrimary",
            marginBottom: 200,
            fontFamily: '"Segoe UI"'}}>
            A Crypto Space For All
        </Typography>
    </Container>
  )
}

export default Welcome;