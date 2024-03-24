import { ICurrency } from "@/types";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Modal,
  Slider,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { MainTitle } from "..";
import { Box, Stack } from "@mui/system";
import { RegularSingleText } from "@/components";
import MuiInput from "@mui/material/Input";
import { Dispatch, SetStateAction, useState } from "react";
import { SxProps } from "@mui/system";

const Input = styled(MuiInput)`
  width: 50px;
`;

const NewFobSection: React.FC<{
  user: string;
  validUntil: string;
  setValidUntil: Dispatch<SetStateAction<string>>;
  setFobNumber: Dispatch<SetStateAction<string>>;
}> = ({ user, validUntil, setValidUntil, setFobNumber }) => {
  const [isFobValid, setIsFobValid] = useState<boolean>(true);
  const [numDays, setNumDays] = useState<number>(0);
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [date, setDate] = useState<string>(formatDate(new Date()));
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const onFobInput = (fobNumber: string) => {
  //   // Set this to work with the isFobValid addition placed in the types
  //   const checkFobFormat = (fobNumber: string): boolean => {
  //     const regex = /[0-9]{4}[A-Za-z]{4}/i;
  //     return regex.test(fobNumber);
  //   };

  //   setIsFobValid(checkFobFormat(fobNumber));

  //   {
  //     isFobValid
  //       ? (setFobNumber(fobNumber), setValidUntil(date))
  //       : (setFobNumber(""), setValidUntil(""));
  //   }
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
      value: "DAI",
      label: "D",
    },
    {
      value: "USDC",
      label: "$",
    },
    {
      value: "USDT",
      label: "T",
    },
  ];

  function formatDate(date: Date) {
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();
    const day: number = date.getDate();
    return `${day}/${month}/${year}`;
  }

  function addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  }

  function calcDonation(donation: number) {
    const finalDonation: number = donation * 5;
    return finalDonation;
  }

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
    activeThumb?: number
  ) => {
    setNumDays(newValue as number);
    const calculatedDonation: number = calcDonation(newValue as number);
    setDonationAmount(calculatedDonation);
    const newDate: Date = addDays(new Date(), Number(newValue));
    const newDateFormated: string = formatDate(newDate);
    setDate(newDateFormated);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumDays(event.target.value === "" ? 0 : Number(event.target.value));
    const calculatedDonation: number = calcDonation(Number(event.target.value));
    setDonationAmount(calculatedDonation);
    const newDate: Date = addDays(new Date(), Number(event.target.value));
    const newDateFormated: string = formatDate(newDate);
    setDate(newDateFormated);
  };

  const handleBlur = () => {
    if (numDays < 0) {
      setNumDays(0);
    } else if (numDays > 100) {
      setNumDays(100);
    }
  };

  // Props
  const stackItemProps: SxProps = {
    direction: "row",
    spacing: 2,
    textAlign: "left",
    alignItems: "center",
    marginBottom: "-32px",
  };

  return (
    <Box>
      <MainTitle
        mainTitle="New Fob"
        subtext="In this section you are able to add a new fob to your account and select how many days you would like to be a member for."
      />
      <Box mt={"64px"}>
        <Grid
          container
          spacing="64px"
          alignItems="center"
          justifyContent="center"
          // mb="200px"
        >
          <Grid item>
            <Stack
              direction={"column"}
              alignContent={"center"}
              alignItems={"center"}
            >
              <Box
                component="img"
                sx={{
                  width: 300,
                  height: 300,
                }}
                alt="Zoro Logo"
                src="nft/Zoro_profile.jpeg"
              />
            </Stack>
          </Grid>
          {/* mt={"-32px"} */}

          {/* CHANGE THE STUFF BELOW TO USE THE NEW isFobValid PART OF THE CONTEXT WHICH WILL USE THE useEffect TO CHECK IF THE FORMAT IS CORRECT USING THE isValidFobFormat FUNCTION ABOVE (MOVE IT THERE)*/}

          <Grid item width={{ sm: "300px", md: "485px" }}>
            <Stack direction={"column"}>
              <RegularSingleText text="Enter Fob Number:" />
              <TextField
                // error={isFobValid}
                error={false}
                fullWidth
                id="outlines-basic"
                label="Ex. 0001XXXX"
                variant="outlined"
                onChange={(event) => setFobNumber(event.target.value)}
                // helperText={
                //   isFobValid
                //     ? "The Fob Number entered does not have the proper format."
                //     : undefined
                // }
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <RegularSingleText text="Choose number of days to mint 'FOB Membership':" />

              <Slider
                value={typeof numDays === "number" ? numDays : 0}
                onChange={(event, value) => handleSliderChange(event, value)}
                aria-labelledby="input-slider"
                defaultValue={30}
                min={1}
                max={60}
                style={{
                  alignSelf: "center",
                  marginLeft: "16px",
                  marginBottom: "16px",
                }}
              />
              <Grid
                container
                spacing={"3px"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                marginTop={"-16px"}
              >
                <Grid item>
                  <Input
                    value={numDays ? numDays : ""}
                    placeholder="0"
                    size="medium"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 1,
                      min: 1,
                      max: 60,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </Grid>
                <Grid item>
                  <RegularSingleText text="Or Enter Custom" />
                </Grid>
              </Grid>
              <Stack {...stackItemProps}>
                <RegularSingleText text="Total Donation: " />
                <Typography
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 200,
                    textAlign: "left",
                    color: "textPrimary",
                  }}
                >
                  ${donationAmount}
                </Typography>
              </Stack>
              <Stack {...stackItemProps}>
                <RegularSingleText text="Valid Until: " />
                <Typography
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 200,
                    textAlign: "left",
                    color: "textPrimary",
                  }}
                >
                  {date}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{
            mt: "64px",
            mb: "16px",
          }}
        >
          <FormControlLabel
            required
            control={
              <Checkbox
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCheckbox(event.target.checked);
                  if (event.target.checked) {
                    handleOpen();
                  }
                }}
              />
            }
            label="I have read and understand the DCTRL Guidelines."
            sx={{
              fontSize: 2,
            }}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                DCTRL TOS
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{
            // mt: "64px",
            mb: "64px",
          }}
        >
          <Stack
            direction={"row"}
            spacing={"32px"}
            divider={<Divider orientation="vertical" flexItem />}
            alignItems={"center"}
          >
            <TextField
              id="standard-select-currency"
              select
              onChange={() => {}}
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
            <Button
              disabled={checkbox ? false : true}
              variant="outlined"
              size="large"
              color="primary"
              // onClick={props.inUserList ? undefined : handleButtonClick}
              sx={{
                width: { xs: 100, sm: 150, md: 200, lg: 250 },
                height: "45px",
              }}
            >
              Mint for ${donationAmount}
            </Button>
          </Stack>
        </Box>
        <Box mx={"128px"} mb={"128px"}>
          <RegularSingleText text="The suggested fonation for this will mint your fob NFT inside your DCTRL Membership Wallet. This wallet is designed specifically to hold this." />
        </Box>
      </Box>
    </Box>
  );
};

export default NewFobSection;
