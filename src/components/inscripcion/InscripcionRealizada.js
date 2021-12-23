import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reahcer } from "../../actions/asignaturas";

export const InscripcionRealizada = ({ inscripcion }) => {
  const { name, uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleReHacer = () => {
    dispatch(reahcer(uid));
  };

  return (
    <div>
      <h1>Estiamdo estudiante {name} sus asignaturas incritas son: </h1>
      {inscripcion.asignaturas.map((asig) => (
        <div key={asig.id._id}>
          <h1>{asig.id.nombre}</h1>
          <span>profesor: {asig.seccion.docente}</span>
        </div>
      ))}
      <button onClick={handleReHacer}>Rehacer</button>
    </div>
  );
};
