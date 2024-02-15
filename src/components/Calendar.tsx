// import React, { FC } from 'react'
// import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize } from '@syncfusion/ej2-react-schedule';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { registerLicense } from '@syncfusion/ej2-base';

// // Data
// // import { scheduleData } from '../data/dummy';
// import { TitleTextCombo } from '../components';
// import { Box } from '@mui/material';

// // This is needed to be able to use the Syncfusion component
// registerLicense(
//   'Ngo9BigBOggjHTQxAR8/V1NHaF1cWmhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZiW35acHVQQWJZWUR2Xw==');

// const boxItemProps: any = {
//     item: true,
//     m: 2,
//     mt: 20,
//     p: 2,
//     md:{m:10, p:10},
//     bg: "white",
//     rounded: "3xl"
//   }

// const Calendar: React.FC = () => {
//   return (
//     <Box sx={boxItemProps}>
//         <TitleTextCombo
//           title='Schedule'
//           message='Here is a schedule of all upcoming events happening at Dctrl'
//         />
//         <ScheduleComponent
//           height = "650px"
//           // This is where the data goes
//           // eventSettings= {{ dataSource: scheduleData }}
//           selectedDate={new Date(2023, 0, 11, 6, 30)}
//         >
//           <Inject services= {[Day, Week, WorkWeek, Month, Agenda, Resize]} />
//         </ScheduleComponent>
//     </Box>
//   )
// }

// export default Calendar
// import React from 'react'
// import { registerLicense } from '@syncfusion/ej2-base';

// import { TitleTextCombo } from '../components';
// import { Box } from '@mui/material';

// // This is needed to be able to use the Syncfusion component
// registerLicense(
//   'Ngo9BigBOggjHTQxAR8/V1NHaF1cWmhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEZiW35acHVQQWJZWUR2Xw==');

// interface Event {
//   date: Date;
//   title: string;
// }

// interface CalendarProps {
//   events: Event[];
//   onEventClick: (event: Event) => void;
// }

// const Calendar = () => {
//   return (

//   )
// }

// export default Calendar

import { FC, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // pluging
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; // needed for dayClick
import {
  EventApi,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/core";
import { INITIAL_EVENTS, createEventId } from "./event_utils";
import { Box, Grid, Typography } from "@mui/material";
import { TitleTextCombo } from ".";

const fixedDigits = (int: number, digits: number) => {
  const tempInt = Math.floor(10 ** digits + int);
  return String(tempInt).substr(-digits);
};
const thisMonth = () => {
  const today = new Date();
  console.log(`${today.getFullYear()}-${fixedDigits(today.getMonth() + 1, 2)}`);
  return `${today.getFullYear()}-${fixedDigits(today.getMonth() + 1, 2)}`;
};

const boxItemProps: any = {
  item: true,
  m: 2,
  mt: 15,
  p: 2,
  md: { m: 10, p: 10 },
};

const Calendar: React.FC = () => {
  const handleDateClick = useCallback((arg: DateClickArg) => {
    console.log(arg);
  }, []);
  return (
    <Box sx={boxItemProps}>
      <TitleTextCombo
        title="Schedule"
        message="Here is a schedule of all upcoming events happening at Dctrl"
      />
      <Box>
        {/* sx={{ width: "50%" }} */}
        <Grid container alignItems="center" justifyContent="center" mb="100px">
          <Grid item xs={8}>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              initialEvents={INITIAL_EVENTS}
              eventContent={renderEventContent}
              dateClick={handleDateClick}
              locale="en"
              contentHeight="500px"
              aspectRatio={2}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const formatTime = (timeText: string): string => {
  // Example: "12p" to "12 PM"
  const hour = parseInt(timeText, 10);
  const isPM = timeText.toLowerCase().includes("p");
  const period = isPM ? "PM" : "AM";

  return `${hour} ${period}`;
};

function renderEventContent(eventContent: EventContentArg) {
  // CONTINUE HERE. TRYING TO CREATE TYPE SO THE COLOR OF THE EVENT CHANGES DEPENDING ON WHAT IT BELONGS TO.
  console.log(eventContent);
  const formattedStartTime = formatTime(eventContent.timeText);
  const eventTitle = eventContent.event.title;

  const color: string = "";

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{ fontSize: "12px" }}
        color="tan"
        mb="-8px"
        alignContent="center"
        textAlign="center"
        width="100%"
      >
        <b>{formattedStartTime}</b>
        <br />
        <i>{eventTitle}</i>
      </Typography>
    </Box>
  );
}

export default Calendar;

// import React from 'react'
// import {
//   EventApi,
//   DateSelectArg,
//   EventClickArg,
//   EventContentArg,
//   formatDate,
// } from '@fullcalendar/core'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import { INITIAL_EVENTS, createEventId } from './event-utils'

// interface DemoAppState {
//   weekendsVisible: boolean
//   currentEvents: EventApi[]
// }

// export default class DemoApp extends React.Component<{}, DemoAppState> {

//   state: DemoAppState = {
//     weekendsVisible: true,
//     currentEvents: []
//   }

//   render() {
//     return (
//       <div className='demo-app'>
//         {this.renderSidebar()}
//         <div className='demo-app-main'>
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay'
//             }}
//             initialView='dayGridMonth'
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={this.state.weekendsVisible}
//             initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//             select={this.handleDateSelect}
//             eventContent={renderEventContent} // custom render function
//             eventClick={this.handleEventClick}
//             eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
//             /* you can update a remote database when these fire:
//             eventAdd={function(){}}
//             eventChange={function(){}}
//             eventRemove={function(){}}
//             */
//           />
//         </div>
//       </div>
//     )
//   }

//   renderSidebar() {
//     return (
//       <div className='demo-app-sidebar'>
//         <div className='demo-app-sidebar-section'>
//           <h2>Instructions</h2>
//           <ul>
//             <li>Select dates and you will be prompted to create a new event</li>
//             <li>Drag, drop, and resize events</li>
//             <li>Click an event to delete it</li>
//           </ul>
//         </div>
//         <div className='demo-app-sidebar-section'>
//           <label>
//             <input
//               type='checkbox'
//               checked={this.state.weekendsVisible}
//               onChange={this.handleWeekendsToggle}
//             ></input>
//             toggle weekends
//           </label>
//         </div>
//         <div className='demo-app-sidebar-section'>
//           <h2>All Events ({this.state.currentEvents.length})</h2>
//           <ul>
//             {this.state.currentEvents.map(renderSidebarEvent)}
//           </ul>
//         </div>
//       </div>
//     )
//   }

//   handleWeekendsToggle = () => {
//     this.setState({
//       weekendsVisible: !this.state.weekendsVisible
//     })
//   }

//   handleDateSelect = (selectInfo: DateSelectArg) => {
//     let title = prompt('Please enter a new title for your event')
//     let calendarApi = selectInfo.view.calendar

//     calendarApi.unselect() // clear date selection

//     if (title) {
//       calendarApi.addEvent({
//         id: createEventId(),
//         title,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay
//       })
//     }
//   }

//   handleEventClick = (clickInfo: EventClickArg) => {
//     if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//       clickInfo.event.remove()
//     }
//   }

//   handleEvents = (events: EventApi[]) => {
//     this.setState({
//       currentEvents: events
//     })
//   }

// }

// function renderEventContent(eventContent: EventContentArg) {
//   return (
//     <>
//       <b>{eventContent.timeText}</b>
//       <i>{eventContent.event.title}</i>
//     </>
//   )
// }

// function renderSidebarEvent(event: EventApi) {
//   return (
//     <li key={event.id}>
//       <b>{formatDate(event.start!, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//       <i>{event.title}</i>
//     </li>
//   )
// }
