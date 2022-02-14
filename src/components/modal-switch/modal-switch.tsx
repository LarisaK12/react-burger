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
import {HOME_PAGE} from "../../utils/burger-constants";



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
        <Route path={`${HOME_PAGE}/`} exact={true}>
          <ConstructorPage />
        </Route>
        <Route path={`${HOME_PAGE}/constructor`} exact={true}>
          <ConstructorPage />
        </Route>
        <Route path={`${HOME_PAGE}/ingredient/:id`}>
          <IngredientDetailsPage />
        </Route>
        <Route path={`${HOME_PAGE}/login`} exact={true}>
          <LoginPage />
        </Route>
        <Route path={`${HOME_PAGE}/register`} exact={true}>
          <RegisterPage />
        </Route>
        <Route path={`${HOME_PAGE}/forgot-password`} exact={true}>
          <ForgotPasswordPage />
        </Route>
        <Route path={`${HOME_PAGE}/reset-password`} exact={true}>
          <ResetPasswordPage />
        </Route>
        <Route path={`${HOME_PAGE}/feed/:id`} exact={true}>
          <OrderDetailsPage />
        </Route>
        <Route path={`${HOME_PAGE}/feed`} exact={true}>
          <FeedPage />
        </Route>
        
        <ProtectedRoute path={`${HOME_PAGE}/profile`} exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        
        <ProtectedRoute path={`${HOME_PAGE}/exit`} exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path={`${HOME_PAGE}/profile/orders`} exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path={`${HOME_PAGE}/profile/orders/:id`} exact={true}>
          <OrderDetailsPage />
        </ProtectedRoute>

        <Route>
          <Code404Page />
        </Route>
      </Switch>
      {background && (
        <Route
          path={`${HOME_PAGE}/ingredient/:id`}
          children={
            <Modal onClose={closeModal} header="Детали ингредиента">
              <IngredientDetailsPage />
            </Modal>
          }
        />
        
      )}
      {background && (
        <Route
          path={`${HOME_PAGE}/feed/:id`}
          children={
            <Modal onClose={closeModal} header="Детали заказа">
              <OrderDetailsPage />
            </Modal>
          }
        />
        
      )}
      {background && (
        <Route
          path={`${HOME_PAGE}/profile/orders/:id`}
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
