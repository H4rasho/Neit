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
