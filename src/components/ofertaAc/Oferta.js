import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startgetFacultades } from "../../actions/facultad";

import "./styles/Oferta.css";

export const Oferta = () => {
  const { checkingFacultad, facultades, carreras } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();

  const [modo, setModo] = useState("facultad");

  const [option, setOption] = useState("");

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleFacultad = () => {
    setModo("facultad");
  };

  const handleCarrera = () => {
    setModo("carrera");
  };

  useEffect(() => {
    dispatch(startgetFacultades());
  }, [dispatch]);

  if (checkingFacultad) {
    return <h1>cargando...</h1>;
  }

  return (
    <div className="bg-light container">
      {/*Radios para seleccionar facultad o carrera*/}
      <h5>Seleccione opción</h5>
      <div className="form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="userTypeForm"
          id="flexRadioDefault1"
          value="facultad"
          onClick={handleFacultad}
        ></input>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          &nbsp;Facultad
        </label>
      </div>
      <div className="form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="userTypeForm"
          id="flexRadioDefault2"
          value="admin"
          onClick={handleCarrera}
        ></input>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          &nbsp;Carrera
        </label>
      </div>

      {/*Despliegue de lista según modo escogido*/}
        <select
          className="mt-2 form-select"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="">Lista según modo</option>
          {modo === "facultad"
            ? facultades.map((f) => (
                <option value={f.nombre} key={f.id} name="section">
                  {f.nombre}
                </option>
              ))
            : carreras.map((c) => (
                <option value={c.nombre} key={c.id} name="section">
                  {c.nombre}
                </option>
              ))}
        </select>
      <Link to="/admin/asignaturas">
        <button className="mt-3 btn btn-success">Siguiente</button>
      </Link>

    </div>
  );
};
