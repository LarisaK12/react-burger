import React from "react";
import styles from "./login.module.css";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../services/actions/login";
import { SET_ERROR, CLEAR_ERROR } from "../services/actions/error";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Awaiter } from "../components/awaiter/awaiter";

export const LoginPage = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  const { error } = useSelector((store) => store.error);
  const { loginRequestFailed } = useSelector((store) => store.login);
  const { profileRequest, user } = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  const location = useLocation();
  const LogInClick = (e) => {
    e.preventDefault();
    dispatch({ type: CLEAR_ERROR });
    dispatch(login({ email: emailValue, password: passValue }));
  };
  React.useEffect(() => {
    if (loginRequestFailed)
      dispatch({
        type: SET_ERROR,
        error: "Проверьте правильность логина и пароля",
      });
    else dispatch({ type: CLEAR_ERROR });
  }, [dispatch, loginRequestFailed]);

  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const onChangePass = (e) => {
    setPassValue(e.target.value);
  };

  return user ? (
    <Redirect
      to={
        location.state?.from?.pathname === "/exit"
          ? "/"
          : location.state?.from || "/"
      }
    />
  ) : profileRequest ? (
    <>
      <Awaiter />
    </>
  ) : (
    <>
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
            {error && <p className="text text_type_main-medium">{error}</p>}
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
