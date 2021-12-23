import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startgetFacultades = () => {
  return async (disptach) => {
    const resp = await fetchConToken("private/facultad");
    const body = await resp.json();

    if (body.ok) {
      disptach(
        getFacultades({ facultades: body.facultades, carreras: body.carreras })
      );
    } else {
      console.log(body.error);
    }
  };
};

const getFacultades = (facultad) => ({
  type: types.adminGetFacultades,
  payload: facultad,
});

export const setOption = (option) => ({
  type: types.adminSetOption,
  payload: option,
});

export const adminOfertaAcademicaSetFacultad = (facultad) => ({
  type: types.adminOfertaAcademicaSetFacultad,
  payload: facultad,
});

export const adminOfertaAcademicaSetCarrera = (carrera) => ({
  type: types.adminOfertaAcademicaSetCarrera,
  payload: carrera,
});

export const adminActiveAsignatura = (asignatura) => ({
  type: types.adminActiveAsignatura,
  payload: asignatura,
});

export const adminOfertaAcademicaSetAsignatura = (asignatura) => ({
  type: types.adminOfertaAcademicaSetAsignatura,
  payload: asignatura,
});

export const adminOfertaAcademicaAddSeccion = (asignatura) => ({
  type: types.adminOfertaAcademicaAddSeccion,
  payload: asignatura,
});

export const adminCrearOfertaAcademica = async (oferta) => {
  console.log(oferta);
  const resp = await fetchConToken("private/ofertaAcedemica", oferta, "POST");
  const body = await resp.json();

  console.log(body);

  if (body.ok) {
    Swal.fire("Oferta Académica", "Añadida con Éxito!", "success");
  } else {
    Swal.fire("Error", body.msg, "error");
  }
};
