import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Navbar } from "../components/ui/Navbar";

import { InscriptionRoutes } from "./InscriptionRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export default function AppRouter() {
  let isLogged = true;

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar />
        <Switch>
          <PublicRoutes
            path="/login"
            component={Login}
            isAuthenticated={isLogged}
          />
          <PrivateRoutes
            path="/"
            component={InscriptionRoutes}
            isAuthenticated={isLogged}
          />
        </Switch>
      </div>
    </Router>
  );
}
