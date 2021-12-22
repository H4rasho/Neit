import { types } from "../types/types";

const initialState = {
  checkingFacultad: true,
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

    default:
      return {
        ...state,
      };
  }
};
