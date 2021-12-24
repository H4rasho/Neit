import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  eliminarAsignatura,
  realizarIncripcion,
  startGetIncripcion,
} from "../../actions/asignaturas";
import { Horario } from "../horario/Horario";

import { AsignaturaModal } from "./AsignaturaModal";
import "./styles/inscripcion.css";
import Swal from "sweetalert2";
import { InscripcionRealizada } from "./InscripcionRealizada";

export const Inscripcion = ({ history }) => {
  const { asignaturas, inscripcion, habilitado } = useSelector(
    (state) => state.inscripcion
  );

  const { uid } = useSelector((state) => state.auth);
  const { asignaturasDB, inscripcionRealizada, checkingInscripcion } =
    useSelector((state) => state.inscripcion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetIncripcion(uid));
  }, [dispatch, uid]);

  const handleIncripcion = async () => {
    await realizarIncripcion(inscripcion, uid);
    history.replace("/");
  };

  const handleEliminar = (asgiEliminar) => {
    console.log(asgiEliminar);
    const asig = asignaturasDB.find((a) => a.id.id === asgiEliminar.id);
    dispatch(eliminarAsignatura(asig));
    Swal.fire({
      title: "Asignatura eliminada",
      text: "Has eliminado la asignatura de la lista",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const unirHorarios = (horarios) => {
    let templateHorario = "";
    horarios.forEach((h) => {
      templateHorario += `${h.dia} ${h.horaInicio} - ${h.horaFin} - `;
    });

    return templateHorario;
  };
  if (!habilitado && inscripcionRealizada) {
    return <InscripcionRealizada inscripcion={inscripcionRealizada} />;
  }

  if (checkingInscripcion) {
    return <h1>Cargando</h1>;
  }

  return (
    <div>
      <div className="row m-1">
        <div className="border border-3 border-dark col-2 bg-light columna1">
          <div className="border-bottom border-3 border-dark text-center marco1">
            Asignaturas por inscribir
          </div>
          <div className="border-bottom marco2">Lista de asignaturas: </div>
          {asignaturas ? (
            asignaturas.map((asig) => (
              <AsignaturaModal asignatura={asig} key={asig._id} />
            ))
          ) : (
            <h1>No hay asignaturas</h1>
          )}
        </div>

        <div className="col-8">
          <Horario />
          <table className="table table-bordered table-striped border-light text-center Tseccion">
            <thead>
              <tr>
                <th scope="row" colSpan="2">
                  Asignatura
                </th>
                <th scope="col" colSpan="2">
                  Profesor
                </th>
                <th scope="col" colSpan="2">
                  Horario
                </th>
              </tr>
            </thead>
            <tbody>
              {inscripcion.map((insc) => (
                <tr key={insc.id}>
                  <td colSpan="2">{insc.nombre}</td>
                  <td colSpan="2">{insc.seccion.docente}</td>
                  <td colSpan="2">{unirHorarios(insc.seccion.horarios)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-2 border border-3 border-dark bg-light container-fluid columna3">
          <div className="border-bottom border-3 border-dark text-center marco3">
            Asignaturas seleccionadas
          </div>
          <div className="border-bottom marco2">Limite de ramos:</div>
          {inscripcion.map((inscr) => (
            <div key={inscr.id} className="incripcion__div">
              <h6>{inscr.nombre}</h6>
              <button
                className="btn btn-danger"
                onClick={() => handleEliminar(inscr)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8"></div>
          <div className="col-2">
            <button
              className="btn btn-success btnInscripcion"
              onClick={handleIncripcion}
            >
              Realizar Inscripcion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
