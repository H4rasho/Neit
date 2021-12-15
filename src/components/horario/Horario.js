import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/es";

import "./styles/Horario.css";
import { useState } from "react";

moment.locale("es");

const localizer = momentLocalizer(moment);
const myEventsList = [];

// const newFehca = {
//   title: "Introduccion a la ingeniería",
//   start: moment("01 03 2021 15:00:00", "DD MM YYYY hh:mm:ss"),
//   end: moment("01 03 2021 16:00:00", "DD MM YYYY hh:mm:ss"),
// };

let formats = {
  dayFormat: "dddd",
};

export const Horario = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const fechaInicio = moment("01 03 2021 08:00:00", "DD MM YYYY hh:mm:ss");
  const fechaTermino = moment("01 03 2021 23:00:00", "DD MM YYYY hh:mm:ss");

  return (
    <div className="clendarContainer">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        min={fechaInicio}
        max={fechaTermino}
        onView={onViewChange}
        endAccessor="end"
        style={{ height: 700 }}
        defaultView="week"
        toolbar={false}
        view={lastView}
        date={fechaInicio}
        formats={formats}
      />
    </div>
  );
};
