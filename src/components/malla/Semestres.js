import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startObtenerMalla } from "../../actions/asignaturas";
import { getHeadMalla, getRows } from "../../helpers/malla";

import "./styles/malla.css";

export const Semestres = () => {
  const { uid } = useSelector((state) => state.auth);
  const { malla } = useSelector((state) => state.inscripcion);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startObtenerMalla(uid));
  }, [dispatch, uid]);

  return (
    <>
      {malla ? (
        <>
          <header className="flex">
            {getHeadMalla(malla.asignaturas).map((numeroSemestre) => (
              <p className="flex-element" key={numeroSemestre}>
                {numeroSemestre}
              </p>
            ))}
          </header>
          <div className="flex">
            {getHeadMalla(malla.asignaturas).map((h) => (
              <section key={h}>
                {getRows(malla.asignaturas, h).map((asignatura) => (
                  <p key={asignatura.id._id}>{asignatura.id.nombre}</p>
                ))}
              </section>
            ))}
          </div>
        </>
      ) : (
        <h1>NO malla</h1>
      )}
    </>
  );
};
