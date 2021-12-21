import React from "react";
import "./styles/Oferta.css";

export const Oferta = () => {
  return (
    <div>
      <div className="bg-light container">
          {/*Radios para seleccionar facultad o carrera*/}
          <h5>Seleccione opción</h5> 
          <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userTypeForm"
                  id="flexRadioDefault1"
                  value="estudiante"
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
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  &nbsp;Carrera
                </label>
          </div>

          {/*Despliegue de lista según modo escogido*/}
          <select className="mt-2 form-select tamano" defaultValue="">
            <option value="" disabled>Lista según modo</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          {/*Tabla con el registro de asignaturas*/}
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
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agregar
                  </button>
                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Registrar asignatura</h5>
                          <button type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                          > 
                          </button>
                        </div>
                        <div className="modal-body">
                          {/*Formulario para datos de la asignatura*/}
                          <form>

                            <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Docente</label>
                              <input type="text" className="form-control" id="docente"></input>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="exampleInputPassword1" className="form-label">Horario</label>
                              <input type="text" className="form-control" id="dia" placeholder="Dia"></input>
                              <input type="text" className="form-control" id="horainicio" placeholder="Hora de inicio"></input>
                              <input type="text" className="form-control" id="horafinal" placeholder="Hora de salida"></input>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Cupos</label>
                              <input type="text" className="form-control" id="cupos"></input>
                            </div>

                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" 
                            className="btn btn-danger" 
                            data-bs-dismiss="modal"
                          >
                            Cerrar</button>
                          <button type="button" className="btn btn-success">Registrar datos</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

      </div>
    </div>
  );
};
