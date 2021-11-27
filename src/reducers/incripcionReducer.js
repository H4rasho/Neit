import { types } from "../types/types";

const initialState = {
  asignaturas: null,
};

export const incripcionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.inscripcionGetAsginaturas:
      return {
        ...state,
        asignaturas: action.payload,
      };

    default:
      return state;
  }
};
