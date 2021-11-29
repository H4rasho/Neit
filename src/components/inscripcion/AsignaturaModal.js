import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activarAsignatura,
  inscribirAsignautra,
} from "../../actions/asignaturas";
import { haceTope } from "../../helpers/haceTope";

export const AsignaturaModal = ({ asignatura }) => {
  const [seccion, setSeccion] = useState();

  const { inscripcion, activeAsginatura } = useSelector(
    (state) => state.inscripcion
  );
  const dispatch = useDispatch();

  const handleActiveAsginatura = (asignatura) => {
    dispatch(activarAsignatura(asignatura));
  };

  const inscribirAsignatura = () => {
    const newIncripcion = {
      id: activeAsginatura.id.id,
      nombre: activeAsginatura.id.nombre,
      seccion,
    };

    console.log(newIncripcion);
    // if (!haceTope(activeAsginatura, inscripcion))
    dispatch(inscribirAsignautra(newIncripcion));
  };

  const handleClick = (sec) => {
    setSeccion(sec);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary m-1 asignatura"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => handleActiveAsginatura(asignatura)}
      >
        {asignatura.id.nombre}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Información de la asignatura
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {activeAsginatura ? (
                activeAsginatura.secciones.map((sec) => (
                  <div className="form-check" key={sec._id}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={() => handleClick(sec)}
                    ></input>
                    <label className="form-check-label">
                      Sección
                      <div className="card">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Profesor: {sec.docente}
                          </li>
                          <li className="list-group-item">Horario: </li>
                          {sec.horarios.map((h) => (
                            <span
                              key={h._id}
                            >{`${h.dia} ${h.horaInicio} - ${h.horaFin}`}</span>
                          ))}
                        </ul>
                      </div>
                    </label>
                  </div>
                ))
              ) : (
                <h1>d</h1>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={inscribirAsignatura}
              >
                Inscribir asignatura
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
