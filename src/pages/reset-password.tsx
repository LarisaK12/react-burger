import React from "react";
import { Awaiter } from "../components/awaiter/awaiter";
import styles from "./reset-password.module.css";
import { useSelector, useDispatch } from "../utils/hooks";
import { Link, Redirect, useHistory } from "react-router-dom";

import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword } from "../services/actions/profile";
import { setError, clearError } from "../services/actions/error";
import { TLocationState } from "../utils/types";

export const ResetPasswordPage = () => {
  const [value, setValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  const {
    user,
    message,
    profileRequestFailed,
    profileRequest,
    passwordReseted,
  } = useSelector((store) => store.profile);
  const { error } = useSelector((store) => store.error);
  const dispatch = useDispatch();
  const history = useHistory<TLocationState>();
  const onSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(clearError());
    dispatch(resetPassword({ password: passValue, token: value }));
  };
  React.useEffect(() => {
    if (profileRequestFailed && passValue){
      if(typeof message === "string") dispatch(setError( message ));
    }
    else if (passwordReseted && !profileRequest && !profileRequestFailed) {
      history.replace({ pathname: "/login" });
    }
  }, [
    dispatch,
    profileRequestFailed,
    passwordReseted,
    passValue,
    message,
    profileRequest,
    history,
  ]);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onChangePass = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(e.target.value);
  };
  if (history.location.state?.pathname !== "/forgot-password")
    return <Redirect to="/forgot-password" />;
  return user ? (
    <Redirect to="/" />
  ) : profileRequest ? (
    <Awaiter />
  ) : (
    <form onSubmit={onSubmit}>
      <div className={styles.main}>
        <div className={styles.inner}>
          <p className="text text_type_main-large mb-6">
            Восстановление пароля
          </p>
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
            <Input
              type="text"
              placeholder="Введите код из письма"
              onChange={onChange}
              value={value}
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
  );
};
