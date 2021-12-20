import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../protected-route/protected-route";
import {
  ConstructorPage,
  LoginPage,
  Code404Page,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
} from "../../pages";

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/" exact={true}>
          <ConstructorPage />
        </ProtectedRoute>
        <ProtectedRoute path="/constructor" exact={true}>
          <ConstructorPage />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/register" exact={true}>
          <RegisterPage />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPasswordPage />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPasswordPage />
        </Route>
        <ProtectedRoute path="/profile" exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <Route>
          <Code404Page />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
