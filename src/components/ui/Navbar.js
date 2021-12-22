import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import "./styles/Navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div>
      <div className="divUno">
        <h1 className="titulo">Sistema de inscripción UTEM</h1>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark navm">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/estudiante/Home">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/estudiante/Inscripcion">
                  Inscripción de ramos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/estudiante/Horario">
                  Mi horario
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/estudiante/Malla">
                  Mi malla curricular
                </Link>
              </li>
              <li className="nav-item out">
                <Link className="nav-link active" to="/" onClick={handleLogout}>
                  Cerrar sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
