import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import { cambiarContrasena } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const NewContrasena = () => {
  const { restToken } = useParams();

  const [values, handleInputChange] = useForm({
    newPassword: "",
    newPassword2: "",
  });

  const { newPassword, newPassword2 } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(newPassword === newPassword2)) {
      return Swal.fire("Las contraseñas", "deben ser iguales", "error");
    }
    if (newPassword.length < 6) {
      return Swal.fire(
        "La contraseña",
        "debe tener al menos 6 caractres",
        "error"
      );
    }
    await cambiarContrasena(newPassword, restToken);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Ingrese vueva contraseña</label>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleInputChange}
        />
        <label>Repita nueva contraseña</label>
        <input
          type="password"
          name="newPassword2"
          value={newPassword2}
          onChange={handleInputChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
