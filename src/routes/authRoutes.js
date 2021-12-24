import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CambioContrasena } from "../components/auth/CambioContrasena";
import { Login } from "../components/auth/Login";

export const authRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth" component={Login} />
        <Route exact path="/auth/contrasena" component={CambioContrasena} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
