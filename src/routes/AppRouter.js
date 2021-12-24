import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Redirect, Switch } from "react-router-dom";
import { startChecking } from "../actions/auth";

import { validarUserType } from "../helpers/validarUserType";
import { AdminRoutes } from "./AdminRoutes";
import { authRoutes } from "./authRoutes";

import { InscriptionRoutes } from "./InscriptionRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export default function AppRouter() {
  const { checking, uid, userType } = useSelector((state) => state.auth);

  const { loggedEstudiante, loggedAdmin } = validarUserType(userType, uid);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere</h5>;
  }

  console.log(loggedEstudiante);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            path="/auth"
            component={authRoutes}
            isAuthenticated={!!uid}
          />
          <PrivateRoutes
            path="/estudiante"
            component={InscriptionRoutes}
            isAuthenticated={loggedEstudiante}
          />
          <PrivateRoutes
            path="/admin"
            component={AdminRoutes}
            isAuthenticated={loggedAdmin}
          />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </Router>
  );
}
