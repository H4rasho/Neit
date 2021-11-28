import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { incripcionReducer } from "./incripcionReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  inscripcion: incripcionReducer,
});
