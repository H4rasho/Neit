import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { authReducer } from "./authReducer";
import { incripcionReducer } from "./incripcionReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  inscripcion: incripcionReducer,
  admin: adminReducer,
});
