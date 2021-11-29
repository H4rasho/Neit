import React from "react";

export const AsignaturaModal = ({ asignatura }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary m-1 asignatura"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
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
              <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                <label class="form-check-label" for="flexRadioDefault1">
                  Sección
                  <div class="card">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Profesor: </li>
                      <li class="list-group-item">Horario: </li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Inscribir asignatura
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
