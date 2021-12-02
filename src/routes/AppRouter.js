import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Switch } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { Login } from "../components/auth/Login";

import { InscriptionRoutes } from "./InscriptionRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export default function AppRouter() {
  const { checking, uid } = useSelector((state) => state.auth);
  let isLogin = !!uid;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere</h5>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            path="/auth"
            component={Login}
            isAuthenticated={isLogin}
          />
          <PrivateRoutes
            path="/"
            component={InscriptionRoutes}
            isAuthenticated={isLogin}
          />
        </Switch>
      </div>
    </Router>
  );
}
