import React from "react";
import "./styles/Oferta.css";

export const Tabla = () => {
  return (
    <div className="bg-light">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Sección</th>
            <th scope="col">Agregar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nombre</td>
            <td>Sección</td>
            <td>
              {/*Modal para agregar detalles de la asignatura*/}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Agregar
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
                        Registrar asignatura
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {/*Formulario para datos de la asignatura*/}
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Docente
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="docente"
                          ></input>
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Horario
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="dia"
                            placeholder="Dia"
                          ></input>
                          <input
                            type="text"
                            className="form-control"
                            id="horainicio"
                            placeholder="Hora de inicio"
                          ></input>
                          <input
                            type="text"
                            className="form-control"
                            id="horafinal"
                            placeholder="Hora de salida"
                          ></input>
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Cupos
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cupos"
                          ></input>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button type="button" className="btn btn-success">
                        Registrar datos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
