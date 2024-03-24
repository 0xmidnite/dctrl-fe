import { Box, Grid, Container, GridProps, Stack } from "@mui/material";
import { NavButton } from "./buttons/navBarButtons";
import { CustomGeneralButton } from ".";

const gridItemProps: GridProps = {
  item: true,
  textAlign: "center",
};

const NavBar: React.FC = () => {
  const isConnected = true;

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
            <NavButton button_titlte="Home" buttonLink="/" />
          </Grid>
          <Grid {...gridItemProps}>
            <NavButton button_titlte="Learn" buttonLink="/learn" />
          </Grid>
          <Grid {...gridItemProps}>
            <NavButton button_titlte="Onboard" buttonLink="/onBoard" />
          </Grid>
          <Grid {...gridItemProps}>
            <NavButton button_titlte="User Profile" buttonLink="/userProfile" />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default NavBar;
