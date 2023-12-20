import { EventInput } from '@fullcalendar/core'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: any[] = [
  // {
  //   id: createEventId(),
  //   title: 'All-day event',
  //   start: todayStr
  // },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T10:00:00',
    end: todayStr + 'T12:00:00'
  }
]

// export interface CustomEventProps {
//   id: string,
//   title: string;
//   start: string;
//   end: string;
// }

// export const INITIAL_EVENTS_V2: CustomEventProps[] = [
//   // {
//   //   id: createEventId(),
//   //   title: 'All-day event',
//   //   start: todayStr
//   // },
//   {
//     id: createEventId(),
//     title: 'Timed event',
//     start: todayStr + 'T10:00:00',
//     end: todayStr + 'T12:00:00'
//   }
// ]1

export function createEventId() {
  return String(eventGuid++)
}