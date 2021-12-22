import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AdminInicio } from "../components/admin/AdminInicio";

export const AdminRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin" component={AdminInicio} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
