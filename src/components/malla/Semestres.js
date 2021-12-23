import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startObtenerMalla } from "../../actions/asignaturas";
import { getHeadMalla, getRows } from "../../helpers/malla";

import "./styles/malla.css";

export const Semestres = () => {
  const { uid } = useSelector((state) => state.auth);
  const { malla } = useSelector((state) => state.inscripcion);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startObtenerMalla(uid));
  }, [dispatch, uid]);

  return (
    <>
      {malla ? (
        <>
          {/*CUADRO DEL NÚMERO DE SEMESTRE*/}
          <div className="overflow-auto">
            <div className="flex">
              {getHeadMalla(malla.asignaturas).map((numeroSemestre) => (
                <div key={numeroSemestre}>
                  <h4 className="flex-element">{numeroSemestre}</h4>
                </div>
              ))}
            </div>

            {/*BOTONES DE LAS ASIGNATURAS*/}
            <div className="flex">
              {getHeadMalla(malla.asignaturas).map((h) => (
                <section key={h}>
                  {getRows(malla.asignaturas, h).map((asignatura) => (
                    <div key={asignatura.id._id} className="m-1">
                      <button
                        type="button"
                        className={`btn btn-primary botonAsignatura ${asignatura.estado}`}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <div className="text-end">{asignatura.promedio}</div>{" "}
                        {/*NOTA ASIGNATURA*/}
                        <p>{asignatura.id.nombre}</p>
                      </button>
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                              >
                                Detalles Asignatura
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="card">
                                <ul className="list-group list-group-flush">
                                  <li className="list-group-item">Estado : </li>
                                  <li className="list-group-item">Tipo : </li>
                                  <li className="list-group-item">Nota : </li>
                                </ul>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                              >
                                Aceptar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h1>NO malla</h1>
      )}
    </>
  );
};
