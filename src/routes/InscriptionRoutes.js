import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { startGetAsignaturas } from "../actions/asignaturas";
import { Home } from "../components/home/Home";
import { Horario } from "../components/horario/Horario";
import { Inscripcion } from "../components/inscripcion/Inscripcion";
import { Malla } from "../components/malla/Malla";

import { Navbar } from "../components/ui/Navbar";

export const InscriptionRoutes = () => {
  const { uid, carrera, facultad } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAsignaturas(uid, carrera, facultad));
  }, [dispatch, uid, carrera, facultad]);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/estudiante" component={Home} />
        <Route exact path="/estudiante/Inscripcion" component={Inscripcion} />
        <Route exact path="/estudiante/Horario" component={Horario} />
        <Route exact path="/estudiante/Malla" component={Malla} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
