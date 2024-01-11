import React from "react";
import { Calendar, CalendarProps, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";

const localizer = momentLocalizer(moment);

export default function Itenary(props: Omit<CalendarProps, "localizer">) {
  return (
    <div className="mx-auto h-[75vh] w-full md:w-4/5">
      <Calendar {...props} localizer={localizer} />
    </div>
  );
}
