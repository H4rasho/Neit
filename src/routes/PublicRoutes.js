import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoutes = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const { userType } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to={`/${userType}`} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
