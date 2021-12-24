import React from "react";
import { solicitarCambioDeContrasena } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const CambioContrasena = () => {
  const [value, handleInputChange] = useForm({
    email: "",
  });

  const { email } = value;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await solicitarCambioDeContrasena(email);
  };

  return (
    <div>
      <h1>Cambio de contraseña</h1>
      <form onSubmit={handleSubmit}>
        <label>Ingrese email</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleInputChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
