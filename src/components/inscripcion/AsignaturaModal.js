import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activarAsignatura,
  inscribirAsignautra,
} from "../../actions/asignaturas";
import { haceTope } from "../../helpers/haceTope";

export const AsignaturaModal = ({ asignatura }) => {
  const { inscripcion, activeAsginatura } = useSelector(
    (state) => state.inscripcion
  );
  const dispatch = useDispatch();

  const handleActiveAsginatura = (asignatura) => {
    dispatch(activarAsignatura(asignatura));
  };

  const inscribirAsignatura = () => {
    if (!haceTope(activeAsginatura, inscripcion))
      dispatch(inscribirAsignautra(activeAsginatura));
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
        {asignatura.nombre}
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
            <div className="modal-body">...</div>
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
