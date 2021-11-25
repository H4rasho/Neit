import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { startChecking, startlogin } from "../actions/auth";
import { Login } from "../components/auth/Login";
import { Navbar } from "../components/ui/Navbar";

import { InscriptionRoutes } from "./InscriptionRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export default function AppRouter() {
  const { checking, uid } = useSelector((state) => state.auth);
  let isLogin = !!uid;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startChecking());
    if (process.env.NODE_ENV === "development") {
      dispatch(startlogin("thomas.sepulvedat@utem.cl", "123456"));
    }
  }, [dispatch]);

  if (checking) {
    return <h5>Espere</h5>;
  }

  return (
    <Router>
      <div>
        <Navbar />
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
