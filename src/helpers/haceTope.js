export const haceTope = (asignaturaIncribir, incripcion) => {
  const auxBoolean = [];

  incripcion.forEach((asig) => {
    asig.horarios.forEach((h) => {
      if (
        h.dia === asignaturaIncribir.dia &&
        (h.horaInicio === asignaturaIncribir.horaInicio ||
          h.horaFin === asignaturaIncribir.horaFin)
      ) {
        auxBoolean.push(true);
      } else {
        auxBoolean.push(false);
      }
    });
  });

  if (auxBoolean.includes(true)) return true;

  return false;
};
