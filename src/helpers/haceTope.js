export const haceTope = (asignaturaIncribir, incripcion) => {
  const auxBoolean = [];
  console.log(asignaturaIncribir);

  incripcion.forEach((asig) => {
    asig.seccion.horarios.forEach((h) => {
      if (comprarHorarios(h, asignaturaIncribir.horarios))
        auxBoolean.push(true);
    });
  });

  if (auxBoolean.includes(true)) return true;

  return false;
};

const comprarHorarios = (horarioIncribir, horariosTomados) => {
  let auxBoolean = [];

  horariosTomados.forEach((h) => {
    if (
      h.dia === horarioIncribir.dia &&
      (h.horaInicio === horarioIncribir.horaInicio ||
        h.horaFin === horarioIncribir.horaFin)
    )
      auxBoolean.push(true);
  });

  if (auxBoolean.includes(true)) return true;
  return false;
};
