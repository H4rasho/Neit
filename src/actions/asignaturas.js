import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startGetAsignaturas = (idEstudiante, idCarrera) => {
  return async (dispatch) => {
    const resp = await fetchConToken(
      `asignaturas?idEstudiante=${idEstudiante}&idCarrera=${idCarrera}`
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch(getAsignaturas(body.ramos));
    } else {
      console.log("err", body.msg);
    }
  };
};

const getAsignaturas = (asginatruas) => ({
  type: types.inscripcionGetAsginaturas,
  payload: asginatruas,
});
