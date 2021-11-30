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
  const { uid, carrera } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAsignaturas(uid, carrera));
  }, [dispatch, uid, carrera]);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Inscripcion" component={Inscripcion} />
        <Route exact path="/Horario" component={Horario} />
        <Route exact path="/Malla" component={Malla} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
