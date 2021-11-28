import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { startChecking } from "../actions/auth";
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
  }, [dispatch]);

  if (checking) {
    return <h5>Espere</h5>;
  }

  if (process.env.NODE_ENV === "development") {
    isLogin = true;
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
