import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({
  component: Component, userAccess, path,
  ...rest
}) => {


  return (
    <Route
      {...rest}
      render={props => {
        console.log(path)
        if (!userAccess && auth.isAdmin() && auth.isAuthenticated()) {
          return <Component {...props} />;
        }
        else if (userAccess && auth.isAuthenticated()) {
          return <Component {...props} />;
        }
        else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
