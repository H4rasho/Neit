import { types } from "../types/types";

const initialState = {
  asignaturas: [],
  inscripcion: [],
  activeAsginatura: null,
  habilitado: false,
};

export const incripcionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.inscripcionGetAsginaturas:
      return {
        ...state,
        asignaturas: action.payload,
      };
    case types.inscribirAsignaturas:
      return {
        ...state,
        inscripcion: [...state.inscripcion, action.payload],
        asignaturas: state.asignaturas.filter(
          (asig) => !(asig.id.id === action.payload.id)
        ),
      };
    case types.incripcionActiva:
      return {
        ...state,
        activeAsginatura: action.payload,
      };

    case types.inscripcionObetenrIncripcion:
      return {
        ...state,
        inscripcion: action.payload,
        habilitado: false,
      };

    default:
      return state;
  }
};
