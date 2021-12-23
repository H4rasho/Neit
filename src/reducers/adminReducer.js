import { types } from "../types/types";

const initialState = {
  checkingFacultad: true,
  checkingAsignaturas: true,
  activeAsignatura: null,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.adminGetFacultades:
      return {
        ...state,
        facultades: action.payload.facultades,
        carreras: action.payload.carreras,
        checkingFacultad: false,
      };
    case types.adminSetOption:
      return {
        ...state,
        option: action.payload,
      };

    case types.adminGetAsignaturas:
      return {
        ...state,
        asignaturas: action.payload,
        checkingAsignaturas: false,
      };

    case types.adminActiveAsignatura:
      return {
        ...state,
        activeAsignatura: action.payload,
      };

    case types.adminOfertaAcademicaSetFacultad:
      return {
        ...state,
        ofertaAcademica: {
          facultad: action.payload,
          asignaturas: [],
        },
      };

    case types.adminOfertaAcademicaSetCarrera:
      return {
        ...state,
        ofertaAcademica: {
          carrera: action.payload,
          asignaturas: [],
        },
      };

    case types.adminOfertaAcademicaSetAsignatura:
      return {
        ...state,
        ofertaAcademica: {
          ...state.ofertaAcademica,
          asignaturas: [...state.ofertaAcademica.asignaturas, action.payload],
        },
        asignaturas: state.asignaturas.map((asig) =>
          asig.id === action.payload.id ? { ...asig, ready: true } : asig
        ),
      };
    case types.adminLimpearOfertaAcademica:
      return {
        ...state,
      };
    case types.authLogout: {
      return initialState;
    }

    default:
      return {
        ...state,
      };
  }
};
