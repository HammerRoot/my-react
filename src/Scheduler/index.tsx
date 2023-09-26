import { WeeklyCalendar } from "antd-weekly-calendar";

import "./index.less";

const events = [
  {
    eventId: "1",
    startTime: new Date(2023, 11, 29, 12, 0, 0),
    endTime: new Date(2023, 11, 29, 14, 30, 0),
    title: "test event",
    backgroundColor: "red",
  },
  {
    eventId: "2",
    startTime: new Date(2023, 11, 30, 10, 0, 0),
    endTime: new Date(2023, 11, 30, 17, 15, 0),
    title: "another test event",
  },
];

function MyCalendar() {
  return (
    <WeeklyCalendar
      events={events}
      weekends={true}
      onEventClick={(event) => console.log(event)}
      onSelectDate={(date) => console.log(date)}
    />
  );
}

export default MyCalendar;
