import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";

import "./styles/Navbar.css";

export const NavbarAdmin = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav>
      <div className="divUno">
        <h5 className="titulo">Sistema de Inscripción UTEM</h5>
        <h6 className="titulo">Modo Administrador</h6>
      </div>
      <div className="navAdmin">
        <Link className=" nav-link active out" to="/" onClick={handleLogout}>
          <button className="btn btn-danger">Cerrar sesion</button>
        </Link>
      </div>
    </nav>
  );
};
