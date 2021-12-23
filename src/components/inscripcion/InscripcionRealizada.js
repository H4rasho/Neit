import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reahcer } from "../../actions/asignaturas";

import "./styles/inscripcion.css";

export const InscripcionRealizada = ({ inscripcion }) => {
  const { name, uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleReHacer = () => {
    dispatch(reahcer(uid));
  };

  return (
    <div className="bg-light container-fluid">
          <div>
            <h4>Estimado {name}, </h4>
            <h5>Las asignaturas que has inscrito son: </h5>
          </div> 
        {inscripcion.asignaturas.map((asig) => (
          <div className="border border-dark border-3 m-2" key={asig.id._id}>
            <h6 className="border-bottom border-dark border-3 colorCA" >
              Asignatura: {asig.id.nombre}
            </h6>
            <h6>Profesor(a): {asig.seccion.docente}</h6>
          </div>
        ))}
        <button className="btn btn-primary m-3" onClick={handleReHacer}>Rehacer inscripción</button>          
    </div>
  );
};
