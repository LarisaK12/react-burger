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
  OrderDetailsPage,
  FeedPage
} from "../../pages";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header";
import { clearCurrentIngredient } from "../../services/actions/ingredient-details";
import { TLocationState } from "../../utils/types";



const ModalSwitch = () => {
  const location = useLocation<TLocationState>();
  const history = useHistory();
  let background = location.state && location.state.background;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch( clearCurrentIngredient());

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
        <Route path="/feed/:id" exact={true}>
          <OrderDetailsPage />
        </Route>
        <Route path="/feed" exact={true}>
          <FeedPage />
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
        <ProtectedRoute path="/profile/orders/:id" exact={true}>
          <OrderDetailsPage />
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
      {background && (
        <Route
          path="/feed/:id"
          children={
            <Modal onClose={closeModal} header="Детали заказа">
              <OrderDetailsPage />
            </Modal>
          }
        />
        
      )}
      {background && (
        <Route
          path="/profile/orders/:id"
          children={
            <Modal onClose={closeModal} header="Детали заказа">
              <OrderDetailsPage />
            </Modal>
          }
        />
        
      )}
    </>
  );
};
export default ModalSwitch;
