import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Oferta } from "../components/ofertaAc/Oferta";

export const AdminRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin" component={Oferta} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
