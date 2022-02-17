import React from "react";
import styles from "./login.module.css";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "../utils/hooks";
import { login } from "../services/actions/login";
import { setError, clearError } from "../services/actions/error";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Awaiter } from "../components/awaiter/awaiter";
import { TLocationState } from "../utils/types";
import { HOME_PAGE } from "../utils/burger-constants";

export const LoginPage = () => {
  const [emailValue, setEmailValue] = React.useState<string>("");
  const [passValue, setPassValue] = React.useState<string>("");
  const { error } = useSelector((store) => store.error);
  const { loginRequestFailed } = useSelector((store) => store.login);
  const { profileRequest, user } = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  const location = useLocation<TLocationState>();
  const LogInClick = (e:React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(clearError());
    dispatch(login({ email: emailValue, password: passValue }));
  };
  React.useEffect(() => {
    if (loginRequestFailed)
      dispatch(setError("Проверьте правильность логина и пароля"));
    else dispatch(clearError());
  }, [dispatch, loginRequestFailed]);

  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const onChangePass = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(e.target.value);
  };
  return user ? (
    <Redirect
      to={
        location.state?.from?.pathname === `${HOME_PAGE}/exit`
          ? `${HOME_PAGE}/`
          : location.state?.from || `${HOME_PAGE}/`
      }
    />
  ) : profileRequest ? (
    <>
      <Awaiter />
    </>
  ) : (
    <form onSubmit={LogInClick}>
      <div className={styles.main}>
        <div className={styles.inner}>
          <p className="text text_type_main-large mb-6">Вход</p>
          <div className={styles.item} id="email">
            <EmailInput
              size="default"
              onChange={onChangeEmail}
              value={emailValue}
              name={"email"}
            />
          </div>
          <span className="mb-6"></span>
          <div className={styles.item} id="password">
            <PasswordInput
              size="default"
              onChange={onChangePass}
              value={passValue}
              name={"password"}
            />
          </div>
          <span className="mb-6"></span>
          <div className={styles.item}>
            <Button type="primary" size="small">
              Войти
            </Button>
          </div>

          <div className="mt-20">
            {error && <p className="text text_type_main-medium">{error}</p>}
            <p className="text text_type_main-small">
              Вы - новый пользователь?{" "}
              <Link to={`${HOME_PAGE}/register`}>Зарегистрироваться</Link>
            </p>
          </div>
          <div className="mt-4">
            <p className="text text_type_main-small">
              Забыли пароль?{" "}
              <Link to={`${HOME_PAGE}/forgot-password`}>Восстановить пароль</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
