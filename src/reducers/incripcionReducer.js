import { types } from "../types/types";

const initialState = {
  asignaturas: [],
  inscripcion: [],
  activeAsginatura: null,
  asignaturasDB: [],
  habilitado: true,
  checking: true,
  horario: [],
};

export const incripcionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.inscripcionGetAsginaturas:
      return {
        ...state,
        asignaturas: action.payload,
        asignaturasDB: action.payload,
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
    case types.authLogout:
      return initialState;

    case types.inscripcionEliminarAsingatura:
      return {
        ...state,
        inscripcion: state.inscripcion.filter(
          (inscr) => inscr.id !== action.payload.id.id
        ),
        asignaturas: [...state.asignaturas, action.payload],
        horario: state.horario.filter(
          (h) => h.title !== action.payload.id.nombre
        ),
      };

    case types.incripcionHorario:
      return {
        ...state,
        horario: [...state.horario, ...action.payload],
      };

    case types.inscripcionObetenerMalla:
      return {
        ...state,
        malla: action.payload,
        checking: false,
      };
    case types.inscripcionStartChecking:
      return {
        checking: true,
      };

    default:
      return state;
  }
};
