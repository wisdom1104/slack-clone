import React from "react";
import loadable from "@loadable/component";
import { Switch, Route, Redirect } from "react-router-dom";

const LogIn = loadable(() => import("../pages/Login/Login"));
const SignUp = loadable(() => import("../pages/SignUp/SignUp"));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
