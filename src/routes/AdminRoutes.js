import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Oferta } from "../components/ofertaAc/Oferta";
import { Tabla } from "../components/ofertaAc/Tabla";
import { NavbarAdmin } from "../components/ui/NavbarAdmin";

export const AdminRoutes = () => {
  return (
    <div>
      <NavbarAdmin />
      <Switch>
        <Route exact path="/admin" component={Oferta} />
        <Route exact path="/admin/asignaturas" component={Tabla} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
