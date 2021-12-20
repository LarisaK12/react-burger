import React from "react";
import AppHeader from "../components/app-header/app-header";
import styles from "./login.module.css";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "../services/actions/profile";
import { SET_ERROR } from "../services/actions/error";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const LoginPage = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  const { user, profileRequestFailed } = useSelector((store) => store.profile);
  const { error } = useSelector((store) => store.error);
  const dispatch = useDispatch();
  const LogInClick = (e) => {
    e.preventDefault();
    dispatch(Login({ email: emailValue, password: passValue }));
  };
  React.useEffect(() => {
    if (profileRequestFailed)
      dispatch({
        type: SET_ERROR,
        error: "Проверьте правильность логина и пароля",
      });
  }, [dispatch, profileRequestFailed]);

  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const onChangePass = (e) => {
    setPassValue(e.target.value);
  };
  if (user) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }
  return (
    <>
      <AppHeader />
      <div className={styles.main}>
        <div className={styles.inner}>
          <p className="text text_type_main-large mb-6">Вход</p>
          <div className={styles.item}>
            <EmailInput
              size="default"
              onChange={onChangeEmail}
              value={emailValue}
              name={"email"}
            />
          </div>
          <span className="mb-6"></span>
          <div className={styles.item}>
            <PasswordInput
              size="default"
              onChange={onChangePass}
              value={passValue}
              name={"password"}
            />
          </div>
          <span className="mb-6"></span>
          <div className={styles.item}>
            <Button type="primary" size="small" onClick={LogInClick}>
              Войти
            </Button>
          </div>

          <div className="mt-20">
            {error && <p className="text text_type_main-small">{error}</p>}
            <p className="text text_type_main-small">
              Вы - новый пользователь?{" "}
              <Link to="/register">Зарегистрироваться</Link>
            </p>
          </div>
          <div className="mt-4">
            <p className="text text_type_main-small">
              Забыли пароль?{" "}
              <Link to="/forgot-password">Восстановить пароль</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
