import React from "react";
import "./styles/inscripcion.css";

export const Inscripcion = () => {
  return (
    <div>
      <div className="row m-1">
        <div className="border border-3 border-dark col-2 bg-light columna1">
          <div className="border-bottom border-3 border-dark text-center marco1">
            Asignaturas por inscribir
          </div>
          <div className="border-bottom marco2">Lista de asignaturas: </div>

          <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Taller de sistemas de información
          </button>


          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Información de la asignatura</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary">Inscribir asignatura</button>
                  </div>
                </div>
              </div>
          </div>

          <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Cálculo I
          </button>


          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Información de la asignatura</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary">Inscribir asignatura</button>
                  </div>
                </div>
              </div>
          </div>

        </div>
        <div className="table-responsive col-8 columna2">
          <table className="table table-bordered table-striped border-light text-center Thorario">
            <thead>
              <tr>
                <th scope="row" colSpan="2">
                  Periodo
                </th>
                <th scope="row" colSpan="2">
                  Bloque
                </th>
                <th scope="col" colSpan="2">
                  Lunes
                </th>
                <th scope="col" colSpan="2">
                  Martes
                </th>
                <th scope="col" colSpan="2">
                  Miércoles
                </th>
                <th scope="col" colSpan="2">
                  Jueves
                </th>
                <th scope="col" colSpan="2">
                  Viernes
                </th>
                <th scope="col" colSpan="2">
                  Sábado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" colSpan="2">
                  1
                </th>
                <td colSpan="2">8:00 - 9:30</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  2
                </th>
                <td colSpan="2">9:40 - 11:10</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  3
                </th>
                <td colSpan="2">11:20 - 12:50</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  4
                </th>
                <td colSpan="2">13:00 - 14:30</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  5
                </th>
                <td colSpan="2">14:40 - 16:10</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  6
                </th>
                <td colSpan="2">16:20 - 17:50</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  7
                </th>
                <td colSpan="2">18:00 - 19:30</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  8
                </th>
                <td colSpan="2">19:40 - 21:10</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <th scope="row" colSpan="2">
                  9
                </th>
                <td colSpan="2">21:20 - 22:50</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border border-3 border-dark col-2 bg-light columna3">
          <div className="border-bottom border-3 border-dark text-center marco3">
            Asignaturas seleccionadas
          </div>
          <div className="border-bottom marco2">Limite de ramos:</div>
        </div>
      </div>
      <div className="row m-1">
        <div className="col-2"></div>
        <div className="table-responsive col-8 columna2">
          <table className="table table-bordered table-striped border-light text-center Tseccion">
            <thead>
              <tr>
                <th scope="row" colSpan="2">
                  Codigo
                </th>
                <th scope="row" colSpan="2">
                  Asignatura
                </th>
                <th scope="col" colSpan="2">
                  Profesor
                </th>
                <th scope="col" colSpan="2">
                  Sección
                </th>
                <th scope="col" colSpan="2">
                  Bloque
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2"> - </td>
                <td colSpan="2"> - </td>
                <td colSpan="2"> - </td>
                <td colSpan="2"> - </td>
                <td colSpan="2"> - </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};
