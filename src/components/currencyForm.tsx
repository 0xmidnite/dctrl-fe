import { Box, Paper, Stack, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ICurrency } from "@/types";

const UserForm: React.FC = () => {
  // const [checked, setChecked] = useState<boolean>(true);
  // const handleChange = (event: any) => {
  //   setChecked(event.target.checked);
  // };

  const currencies: ICurrency[] = [
    {
      value: "ETH",
      label: "Ξ ",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          justifyContent: "center",
          display: "block",
          maxWidth: "715px",
        }}
      >
        <Typography mb={"16px"} fontSize="2.5rem" sx={{ my: "16px" }}>
          Minting
        </Typography>

        <Stack direction="row" spacing={"32px"} justifyContent="center">
          {/* <TextField
						disabled
						id="standard-disabled"
						label="Current Price"
						defaultValue="5568.13"
						variant="standard"
						size="medium"
						sx={{
							width: "70%", //{ sm: "150px", md: "400px", lg: "600px" }
							textAlign: 'center'
						}}
					/> */}
          <Button
            variant="outlined"
            href="./"
            size="medium"
            color="primary"
            sx={{
              width: { xs: 100, sm: 150, md: 200, lg: 250 },
            }}
          >
            Mint for 747.48 ETH
          </Button>

          <TextField
            id="standard-select-currency"
            select
            label="Currency"
            defaultValue="ETH"
            helperText="Please select"
            variant="standard"
            sx={{ marginBottom: "16px" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Box
          component="img"
          sx={{
            width: { xs: "300px", sm: "400px", md: "600px" },
            height: { xs: "300px", sm: "400px", md: "600px" },
            m: 5,
          }}
          alt="Dogo Logo"
          src="nft/Luffy_profile.jpeg"
          boxShadow={3}
        />

        <br />

        <Box
          sx={{
            alignItems: "center",
            my: "8px",
            mx: "64px",
          }}
        ></Box>
      </Paper>
    </Box>
  );
};

export default UserForm;
