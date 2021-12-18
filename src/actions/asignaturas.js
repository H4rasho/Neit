import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startGetAsignaturas = (idEstudiante, idCarrera, idFacultad) => {
  return async (dispatch) => {
    const resp = await fetchConToken(
      `private/asignaturas?idEstudiante=${idEstudiante}&idCarrera=${idCarrera}&idFacultad=${idFacultad}`
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch(getAsignaturas(body.ramos));
    } else {
      console.log("err", body.msg);
    }
  };
};

export const activarAsignatura = (asignatura) => ({
  type: types.incripcionActiva,
  payload: asignatura,
});

const getAsignaturas = (asginatruas) => ({
  type: types.inscripcionGetAsginaturas,
  payload: asginatruas,
});

export const inscribirAsignautra = (asignatura) => ({
  type: types.inscribirAsignaturas,
  payload: asignatura,
});

export const realizarIncripcion = async (inscripcion, estudiante) => {
  const newIncripcion = {
    estudiante,
    fecha: Date.now(),
    asignaturas: inscripcion,
  };

  const resp = await fetchConToken(
    "private/inscripcion",
    newIncripcion,
    "POST"
  );
  const body = await resp.json();

  if (body.ok) {
    Swal.fire("Incripcion", "realizada con éxito", "success");
  } else {
    console.log(body.msg);
  }
};

export const startGetIncripcion = (idEstudiante) => {
  return async (dispatch) => {
    const resp = await fetchConToken(`private/inscripcion/${idEstudiante}`);
    const body = await resp.json();

    if (body.ok) {
      if (!body.habilitado) {
        dispatch(obetenerIncripcion());
      }
    }
  };
};

export const eliminarAsignatura = (asignatura) => ({
  type: types.inscripcionEliminarAsingatura,
  payload: asignatura,
});

const obetenerIncripcion = (inscripcion) => ({
  type: types.inscripcionObetenrIncripcion,
  payload: inscripcion,
});

export const agregarAlHorario = (horario) => ({
  type: types.incripcionHorario,
  payload: horario,
});

export const startObtenerMalla = (idEstudiante) => {
  return async (dispatch) => {
    const resp = await fetchConToken(`private/avanceMalla/${idEstudiante}`);
    const body = await resp.json();

    if (body.ok) {
      dispatch(obetenerMalla(body.malla));
    } else {
      console.log(body.msg);
    }
  };
};

const obetenerMalla = (malla) => ({
  type: types.inscripcionObetenerMalla,
  payload: malla,
});

export const startChecking = () => ({
  type: types.inscripcionStartChecking,
});
