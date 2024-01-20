import getGoogleCalendarEvents from "@/components/google/googleCalendarApi";
import { Box } from "@mui/material";

export default function UserProfile() {
  return (
    <main>
      <Box>User Profile</Box>
    </main>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  await getGoogleCalendarEvents();

  // Pass data to the page via props
  return { props: {} };
}
