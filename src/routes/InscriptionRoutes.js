import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Home } from "../components/home/Home";

export const InscriptionRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
