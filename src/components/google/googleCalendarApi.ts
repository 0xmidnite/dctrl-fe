// googleCalendarApi.ts

import { google, calendar_v3 } from "googleapis";

const SCOPES: string[] = ["https://www.googleapis.com/auth/calendar.readonly"];

const privateKey = require("/Users/gaguerov/Dev/Google_Related/dctrl-calendar-google-key.json"); // Replace with the path to your key file
const calendarId: string = "aguero.guillermo.j@gmail.com"; // Replace with your Google Calendar ID

// const auth: any = new google.auth.GoogleAuth({
//   credentials,
//   scopes: SCOPES,
// });

// let privateKey = require("./privatekey.json");

// const calendar: calendar_v3.Calendar = google.calendar({ version: "v3", auth });

const getGoogleCalendarEvents = async (): Promise<any> => {
  try {
    // const response = await calendar.events.list({
    //   calendarId,
    //   timeMin: new Date().toISOString(),
    //   maxResults: 10,
    //   singleEvents: true,
    //   orderBy: "startTime",
    // });

    // console.log(response);

    // return response.data.items || [];
    var jwtClient = new google.auth.JWT({
      email: privateKey.client_email,
      key: privateKey.private_key,
      scopes: ["https://www.googleapis.com/auth/calendar"],
      subject: "aguero.guillermo.j@gmail.com",
    });

    jwtClient.authorize(function (error, tokens) {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log("Successfully connected!");
      }
    });
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching Google Calendar events:", err.text);
    throw error;
  }
};

export default getGoogleCalendarEvents;
