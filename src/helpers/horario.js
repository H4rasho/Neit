import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const parseDay = (dia) => {
  switch (dia) {
    case "Lunes":
      return "01";

    case "Martes":
      return "02";

    case "Miercoles":
      return "03";

    case "Jueves":
      return "04";

    case "Viernes":
      return "05";

    case "Sabado":
      return "06";

    case "Domingo":
      return "07";

    default:
      break;
  }
};

export const nuevosHorariosCaledario = (horarios, nombreAsignatura) => {
  let horarioCalendario = [];

  horarios.forEach((h) => {
    let fechaInicio = "";
    let fechaFin = "";
    let dia = parseDay(h.dia);
    fechaInicio = `${dia} 03 2021 ${h.horaInicio}:00`;
    fechaFin = `${dia} 03 2021 ${h.horaFin}:00`;
    const newHorario = {
      title: nombreAsignatura,
      start: moment(fechaInicio, "DD MM YYYY hh:mm:ss").toDate(),
      end: moment(fechaFin, "DD MM YYYY hh:mm:ss").toDate(),
    };
    horarioCalendario.push(newHorario);
  });

  return horarioCalendario;
};
