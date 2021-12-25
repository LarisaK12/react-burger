import { ProtectedRoute } from "../protected-route/protected-route";
import Modal from "../modal/modal";
import {
  ConstructorPage,
  LoginPage,
  Code404Page,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  IngredientDetailsPage,
} from "../../pages";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header";
import { CLEAR_CURRENT_INGREDIENT } from "../../services/actions/ingredient-details";

const ModalSwitch = () => {
  const location = useLocation();
  const history = useHistory();
  let background = location.state && location.state.background;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: CLEAR_CURRENT_INGREDIENT });

    history.goBack();
  };
  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <ConstructorPage />
        </Route>
        <Route path="/constructor" exact={true}>
          <ConstructorPage />
        </Route>
        <Route path="/ingredient/:id">
          <IngredientDetailsPage />
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
      {background && (
        <Route
          path="/ingredient/:id"
          children={
            <Modal onClose={closeModal} header="Детали ингредиента">
              <IngredientDetailsPage />
            </Modal>
          }
        />
      )}
    </>
  );
};
export default ModalSwitch;
