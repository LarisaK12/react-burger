import React from "react";
import AppHeader from "../components/app-header/app-header";
import styles from "./login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { SET_ERROR } from "../services/actions/error";
import { Register } from "../services/actions/profile";
import { Redirect, Link } from "react-router-dom";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
export const RegisterPage = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  const [nameValue, setNameValue] = React.useState("");
  const { user, profileRequestFailed, profileRequest } = useSelector(
    (store) => store.profile
  );
  const { error } = useSelector((store) => store.error);
  const dispatch = useDispatch();
  const RegisterButtonClick = (e) => {
    e.preventDefault();
    dispatch(
      Register({ email: emailValue, password: passValue, name: nameValue })
    );
  };
  React.useEffect(() => {
    if (profileRequestFailed)
      dispatch({ type: SET_ERROR, error: "Регистрация не прошла" });
  }, [dispatch, profileRequestFailed]);
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const onChangeName = (e) => {
    setNameValue(e.target.value);
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
          <p className="text text_type_main-large mb-6">Регистрация</p>
          {profileRequest && (
            <p className="text text_type_main-large mb-6">началась</p>
          )}
          {error && <p className="text text_type_main-large mb-6">{error}</p>}
          <div className={styles.item}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={onChangeName}
              value={nameValue}
              size={"default"}
            />
          </div>
          <span className="mb-6"></span>
          <div className={styles.item}>
            <Input
              type={"text"}
              placeholder={"E-mail"}
              onChange={onChangeEmail}
              value={emailValue}
              size={"default"}
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
            <Button type="primary" size="small" onClick={RegisterButtonClick}>
              Зарегистрироваться
            </Button>
          </div>

          <div className="mt-20">
            <p className="text text_type_main-small">
              Уже зарегистрироаны? <Link to="/login">Войти</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
