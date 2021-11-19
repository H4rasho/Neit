import React from "react";
import "./styles/Navbar.css";

export const Navbar = () => {
  return (
    <div>
          <div className="divUno">
            <h1>Sistema de inscripción UTEM</h1>
          </div>
        
          <nav className="navbar navbar-expand-lg navbar-dark navm">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Inscripción de ramos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Mi horario</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#"> Mi malla curricular</a>
                    </li>
                    <li className="nav-item out">
                    <a className="nav-link active" href="#">Cerrar sesión</a>
                    </li>
                </ul>
                </div>
            </div>
          </nav>
    </div>
  );
};
