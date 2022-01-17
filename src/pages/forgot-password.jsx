import React from "react";
import styles from "./forgot-password.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../services/actions/profile";
import { SET_ERROR, CLEAR_ERROR } from "../services/actions/error";
import { useHistory, Redirect, Link } from "react-router-dom";
import { Awaiter } from "../components/awaiter/awaiter";
export const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = React.useState("");

  const {
    profileRequest,
    profileRequestFailed,
    passwordResetRequired,
    message,
  } = useSelector((store) => store.profile);
  const { loggedIn } = useSelector((store) => store.login);
  const { error } = useSelector((store) => store.error);
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: CLEAR_ERROR });
    dispatch(forgotPassword({ email: emailValue }));
  };
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  React.useEffect(() => {
    if (profileRequestFailed && emailValue)
      dispatch({
        type: SET_ERROR,
        error: message,
      });
    else if (
      passwordResetRequired &&
      !profileRequest &&
      !profileRequestFailed
    ) {
      history.replace({ pathname: "/reset-password", state: history.location });
    }
  }, [
    dispatch,
    profileRequestFailed,
    emailValue,
    passwordResetRequired,
    message,
    profileRequest,
    history,
  ]);

  return loggedIn ? (
    <Redirect to="/" />
  ) : profileRequest ? (
    <>
      <Awaiter />
    </>
  ) : (
    <>
      <form onSubmit={onSubmit}>
        <div className={styles.main}>
          <div className={styles.inner}>
            <p className="text text_type_main-large mb-6">
              Восстановление пароля
            </p>
            <span className="mb-6"></span>
            <div className={styles.item}>
              <Input
                type="text"
                placeholder="укажите e-mail"
                onChange={onChangeEmail}
                value={emailValue}
                size="default"
              />
            </div>
            <span className="mb-6"></span>
            <div className={styles.item}>
              <Button type="primary" size="small">
                Восстановить
              </Button>
            </div>

            <div className="mt-20">
              {error && <p className="text text_type_main-small">{error}</p>}
              <p className="text text_type_main-small">
                Вспомнили пароль? <Link to="/login">Войти</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
