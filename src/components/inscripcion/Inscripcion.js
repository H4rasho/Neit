import React from "react";
import "./styles/inscripcion.css";

export const Inscripcion = () => {
  return (
    <div>
        <div className="row m-1">
          <div className="col-2 bg-primary columna1">
            <div className="bg-success">Asignaturas por inscribir</div>
            <div className="bg-warning mt-3">Lista de asignaturas</div>
          </div>
          <div className="col-8 columna2">
            <table className="table table-bordered table-striped border-light text-center Thorario">
              <thead>
                <tr>
                  <th scope="row" colspan="2">Periodo</th>
                  <th scope="row" colspan="2">Bloque</th>
                  <th scope="col" colspan="2">Lunes</th>
                  <th scope="col" colspan="2">Martes</th>
                  <th scope="col" colspan="2">Miércoles</th>
                  <th scope="col" colspan="2">Jueves</th>
                  <th scope="col" colspan="2">Viernes</th>
                  <th scope="col" colspan="2">Sábado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" colspan="2">1</th>
                  <td colspan="2">8:00 - 9:30</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th scope="row" colspan="2">2</th>
                  <td colspan="2">9:40 - 11:10</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th scope="row" colspan="2">3</th>
                  <td colspan="2">11:20 - 12:50</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th scope="row" colspan="2">4</th>
                  <td colspan="2">13:00 - 14:30</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th scope="row" colspan="2">5</th>
                  <td colspan="2">14:40 - 16:10</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th scope="row" colspan="2">6</th>
                  <td colspan="2">16:20 - 17:50</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th scope="row" colspan="2">7</th>
                  <td colspan="2">18:00 - 19:30</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th scope="row" colspan="2">8</th>
                  <td colspan="2">19:40 - 21:10</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th scope="row" colspan="2">9</th>
                  <td colspan="2">21:20 - 22:50</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-2 bg-danger columna3">DIV 3</div>
        </div>
    </div>
  );
};
