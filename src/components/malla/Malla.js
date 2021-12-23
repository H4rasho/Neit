import React from "react";
import { Semestres } from "./Semestres";
import "./styles/malla.css";

export const Malla = () => {
  return (
    <div>
      <div className="m-1">
        <div className="row overflow-auto m-1 rounded-3 bg-light letra">
          <div className="m-1">
            <table className="table table-condensed" width="100%">
              <tbody>
                <tr>
                  <td className="table-success text-center" width="20%">
                    Aprobado
                  </td>
                  <td className="table-primary text-center" width="20%">
                    Inscrito
                  </td>
                  <td className="table-danger text-center" width="20%">
                    Reprobado
                  </td>
                  <td className="table-secondary text-center" width="20%">
                    No Cursado
                  </td>
                  <td className="table-warning text-center" width="20%">
                    Requisito de Asignatura
                  </td>
                </tr>
              </tbody>
            </table>           
          </div>
          <Semestres />       
        </div>       
      </div>
    </div>
  );
};
