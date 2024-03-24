import { ICurrency } from "@/types";
import { Button, Grid, Slider, Typography, styled } from "@mui/material";
import { CustomGeneralButton, MainTitle } from "..";
import { Box, Stack } from "@mui/system";
import { RegularSingleText } from "@/components";
import MuiInput from "@mui/material/Input";
import { Dispatch, SetStateAction, useState } from "react";
import { SxProps } from "@mui/system";
import { CaretDoubleLeft } from "@phosphor-icons/react";
import { sections } from "./userParentComponent";

const Input = styled(MuiInput)`
  width: 50px;
`;

const ManageFobSection: React.FC<{
  validUntil: string;
  setValidUntil: Dispatch<SetStateAction<string>>;
  fobNumber: string;
  setSection: Dispatch<SetStateAction<sections>>;
}> = ({ validUntil, setValidUntil, fobNumber, setSection }) => {
  const [numDays, setNumDays] = useState<number>(0);
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [date, setDate] = useState<string>(formatDate(new Date()));
  const [checkbox, setCheckbox] = useState<boolean>(false);

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

  const onBack = () => {
    setSection(sections.MembershipSection);
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
        mainTitle="Manage Fob"
        subtext="In this section you are able to manage all information regarding your Fob Membership."
      />
      <Box mt={"32px"}>
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

          {/* Notes: For some reason the onChange below is not working even though everything seems correct to me. I believe it may be an issue with how I am cheching to see if the fob is valid but I have to make sure. 
          
          CHANGE THE STUFF BELOW TO USE THE NEW isFobValid PART OF THE CONTEXT WHICH WILL USE THE useEffect TO CHECK IF THE FORMAT IS CORRECT USING THE isValidFobFormat FUNCTION ABOVE (MOVE IT THERE)*/}

          <Grid item width={{ sm: "300px", md: "485px" }}>
            <Stack direction={"column"}>
              <RegularSingleText text={`Fob Number: ${fobNumber}`} />
              <RegularSingleText text="Choose the number of days to extend      membership:" />

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
      </Box>
      <Box mt={"64px"} display="flex" justifyContent={"center"}>
        <Stack direction={"row"} spacing={"64px"} marginBottom={"32px"}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={onBack}
            sx={{
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <CaretDoubleLeft size={18} />
            Back
          </Button>
          <CustomGeneralButton
            title={`Mint for $${donationAmount}`}
            onClick={() => {}}
          />
        </Stack>
      </Box>
      <Stack direction={"row"} alignItems={"center"}>
        <Button
          // disabled={checkbox ? false : true}
          variant="outlined"
          size="large"
          color="primary"
          // onClick={props.inUserList ? undefined : handleButtonClick}
          sx={{
            width: { xs: 100, sm: 150, md: 200, lg: 250 },
            height: "45px",
            margin: "64px",
          }}
        >
          Lost My Fob
        </Button>
        <Box marginRight={"32px"} marginTop={"16px"} textAlign={"left"}>
          <RegularSingleText text="The suggested donation for this will mint your fob NFT inside your DCTRL membership wallet. This wallet is designed specifically to hold this." />
        </Box>
      </Stack>

      {/* <Grid item xs={2}></Grid> */}
    </Box>
  );
};

export default ManageFobSection;
