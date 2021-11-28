import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startlogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("auth", { email, password }, "POST");
    console.log(resp);
    const body = await resp.json();
    if (body.ok) {
      Swal.fire({
        title: 'Has iniciado correctamente',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      });
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
          carrera: body.carrera,
        })
      );
    } else {
      Swal.fire({
        title: 'No has iniciado sesión',
        icon: 'error',
        showConfirmButton: false,
        footer: 'Revisa tus credenciales',
        timer: 2000
      });
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchConToken("auth/renew");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
          carrera: body.carrera,
        })
      );
    } else {
      dispatch(checkingFinish());
      console.log(body.msg);
    }
  };
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.authLogout,
});

const checkingFinish = () => ({
  type: types.authCheckingFinish,
});

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
