import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calender.css";

const localizer = momentLocalizer(moment);

const Calender = () => {
  const events = [
    {
      title: "Event 1",
      start: new Date(2024, 9, 9),
      end: new Date(2024, 9, 10),
    },
  ];

  return (
    <div className="container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "500" }}
      />
    </div>
  );
};

export default Calender;
