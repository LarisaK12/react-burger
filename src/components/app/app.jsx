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
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../services/actions/profile";
function App() {
  const {
    user,
    profileRequest,
    profileRequestFailed,
    setProfileRequest,
    regRequest,
    forgotPassRequest,
    resetPassRequest,
  } = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (
      !user &&
      !profileRequest &&
      !profileRequestFailed &&
      !setProfileRequest &&
      !regRequest &&
      !forgotPassRequest &&
      !resetPassRequest
    )
      dispatch(getUser());
  }, [
    dispatch,
    user,
    profileRequest,
    profileRequestFailed,
    setProfileRequest,
    regRequest,
    forgotPassRequest,
    resetPassRequest,
  ]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <ConstructorPage />
        </Route>
        <Route path="/constructor" exact={true}>
          <ConstructorPage />
        </Route>
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
        <ProtectedRoute path="/exit" exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders" exact={true}>
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
