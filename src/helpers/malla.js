export const getHeadMalla = (asignaturas) => {
  let semestres = [];

  asignaturas.forEach((asig) => {
    if (!semestres.includes(asig.semestreMalla)) {
      semestres.push(asig.semestreMalla);
    }
  });

  return semestres;
};

export const getRows = (asignaturas, semestre) => {
  let rows = [];

  asignaturas.forEach((asig) => {
    if (asig.semestreMalla === semestre) {
      rows.push(asig);
    }
  });

  return rows;
};
