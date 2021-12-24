import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
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
    await cambiarContrasena(newPassword, restToken);
  };

  console.log(restToken);

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
