import React, { useState } from "react";
import Navbar from "./Navbar";
import Home, { Registration, UserRegistrationForm, AdminRegistrationForm, LoginPage, Menu, Admin } from "./Pages.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/ProtectedRoute";


export default function App() {

  const [authentication, setAuthentication] = useState(false);
  const [admin, setAdmin] = useState(false);

  return (
    <Router>
      <Navbar authentication={authentication} admin={admin} setAdmin={setAdmin} setAuthentication={setAuthentication} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/registration/user" component={UserRegistrationForm} />
        <Route exact path="/registration/admin" component={AdminRegistrationForm} />
        <Route exact path="/login"
          render={() => (
            <LoginPage setAdmin={setAdmin} setAuthentication={setAuthentication} />
          )}
        />

        <ProtectedRoute exact path="/menu" component={Menu} userAccess={true} />
        {/* <Route exact path="/menu" component={Menu} /> */}

        <ProtectedRoute exact path="/admin" component={Admin} userAccess={false} />
        {/* <Route exact path="/admin" component={Admin} /> */}

        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}
