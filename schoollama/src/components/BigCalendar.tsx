"use client";

import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const handleOnChangeView = (view: View) => {
    setView(view);
  }
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "98%" }}
      view={view}
      views={["work_week", "day"]}
      onView={handleOnChangeView}
      min={new Date(2025, 0, 1, 7, 0, 0)}
      max={new Date(2025, 11, 30, 18, 0, 0)}
    />
  );
};

export default BigCalendar;
