import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/es";

import "./styles/Horario.css";
import { useSelector } from "react-redux";

moment.locale("es");

const localizer = momentLocalizer(moment);

let formats = {
  dayFormat: (date, __, localizer) => localizer.format(date, "dddd"),
};

export const Horario = () => {
  const { horario } = useSelector((state) => state.inscripcion);

  const fechaInicio = moment(
    "01 03 2021 08:00:00",
    "DD MM YYYY hh:mm:ss"
  ).toDate();
  const fechaTermino = moment(
    "01 03 2021 23:00:00",
    "DD MM YYYY hh:mm:ss"
  ).toDate();

  return (
    <div className="">
      <div className="overflow-auto clendarContainer">
          <Calendar
            localizer={localizer}
            events={horario}
            startAccessor="start"
            min={fechaInicio}
            max={fechaTermino}
            endAccessor="end"
            style={{ height: 600, width: 800 }}
            defaultView="week"
            toolbar={false}
            defaultDate={fechaInicio}
            formats={formats}
          />
      </div>
    </div>
  );
};
