import { Box, Grid, Container, GridProps, Stack } from "@mui/material";
import { NavButton } from "./buttons/navBarButtons";
import { ConnectWalletButton } from ".";

const gridItemProps: GridProps = {
  item: true,
  textAlign: "center",
};

const NavBar: React.FC = () => {
  const isConnected = false;

  return (
    <Container maxWidth="lg">
      <Stack>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Grid {...gridItemProps}>
            <Box
              component="img"
              sx={{
                width: 50,
                height: 50,
                marginTop: 1,
              }}
              alt="Dogo Logo"
              src="logo/Dodge.png"
            />
          </Grid>
          <Grid {...gridItemProps}>
            <NavButton text="Home" buttonLink="/" />
          </Grid>
          <Grid {...gridItemProps}>
            <NavButton text="Learn" buttonLink="/learn" />
          </Grid>
          <Grid {...gridItemProps}>
            <NavButton text="Onboard" buttonLink="/onBoard" />
          </Grid>
          <Grid {...gridItemProps}>
            {isConnected ? (
              <ConnectWalletButton />
            ) : (
              <NavButton text="User Profile" buttonLink="/userProfile" />
            )}
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default NavBar;

{
  /* <NavButton text='Onboard' buttonLink='/onBoard' onClick= {()=>{
  setX(x+1);
}}/> */
}
