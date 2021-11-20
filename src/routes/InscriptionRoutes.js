import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Home } from "../components/home/Home";
import { Horario } from "../components/horario/Horario";
import { Inscripcion } from "../components/inscripcion/Inscripcion";


export const InscriptionRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Inscripcion" component={Inscripcion} />
        <Route exact path="/Horario" component={Horario} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
