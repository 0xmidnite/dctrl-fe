import { AppBar, Box, Grid, Container, Typography, GridProps } from '@mui/material';
import Link from 'next/link';
import React from 'react'

const gridItemProps: GridProps = {
  item: true,
  sm: 2,
  xs: 12,
  textAlign: "center"
}

const NavBar: React.FC = () => {
 
  return (
    <Container maxWidth="lg">
      <Grid 
        container 
        spacing={2} 
        mb={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={1}>
        <Grid {... gridItemProps}>
          <Link href="/">
            <Typography variant='h6'>
              Home
            </Typography>
          </Link>
        </Grid>
        <Grid {... gridItemProps}>
          <Link href="/learn">
            <Typography variant='h6'>
              Learn
            </Typography>
          </Link>
        </Grid>
        <Grid {... gridItemProps}>
          <Link href="/onBoard">
            <Typography variant='h6'>
              Onboard
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NavBar