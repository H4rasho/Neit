import React from "react";

export const Malla = () => {
  return (
    <div>
      <div className="m-2">
        <h2>Malla</h2>
        <div className="row m-1 border border-2 border-dark bg-light">
            <div className="m-1">
              <table className="table table-condensed" width="100%">
                <tbody>
                  <tr>
                    <td className="table-success text-center" width="20%">Aprobado</td>
                    <td className="table-primary text-center legend" width="20%">Inscrito</td>
                    <td className="table-danger text-center legend" width="20%">Reprobado</td>
                    <td className="table-secondary text-center legend" width="20%">No Cursado</td>
                    <td className="table-warning text-center legend" width="20%">Requisito de Asignatura</td>
                  </tr>
                </tbody>
              </table>
            </div>
          <div className="m-1 border border-2 border-dark">Semestres</div>
        </div>
      </div>
    </div>
  );
};
