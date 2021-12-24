import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

export const startlogin = (email, password, userType) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "auth",
      { email, password, userType },
      "POST"
    );

    const body = await resp.json();
    if (body.ok) {
      Swal.fire({
        title: "Has iniciado correctamente",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
          carrera: body.carrera,
          facultad: body.facultad,
          userType: body.userType,
        })
      );
    } else {
      Swal.fire({
        title: "No has iniciado sesión",
        icon: "error",
        showConfirmButton: false,
        footer: body.msg,
        timer: 2000,
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
          facultad: body.facultad,
          userType: body.userType,
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

export const solicitarCambioDeContrasena = async (email) => {
  const resp = await fetchSinToken("auth/reset-password", { email }, "POST");
  const body = await resp.json();

  if (body.ok) {
    Swal.fire(
      "Estimado",
      "se ha enviado un email para el cambio de contraseña",
      "success"
    );
  } else {
    console.log(body.msg);
  }
};

export const cambiarContrasena = async (newPassword, restToken) => {
  const resp = await fetch(`${baseUrl}/auth/change-password`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      resetToken: restToken,
    },
    body: JSON.stringify({ newPassword, restToken }),
  });

  const body = await resp.json();

  if (body.ok) {
    Swal.fire("!Éxito", body.msg, "success");
  } else {
    Swal.fire("Error", body.msg, "error");
  }
};
