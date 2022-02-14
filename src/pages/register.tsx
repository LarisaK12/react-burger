import React from "react";
import styles from "./login.module.css";
import { useSelector, useDispatch } from "../utils/hooks";
import { setError, clearError } from "../services/actions/error";
import { register } from "../services/actions/profile";
import { Redirect, Link } from "react-router-dom";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Awaiter } from "../components/awaiter/awaiter";
import { HOME_PAGE } from "../utils/burger-constants";
export const RegisterPage = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  const [nameValue, setNameValue] = React.useState("");
  const { user, regRequestFailed, regRequest } = useSelector(
    (store) => store.profile
  );
  const { error } = useSelector((store) => store.error);
  const dispatch = useDispatch();
  const onSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(clearError());
    dispatch(
      register({ email: emailValue, password: passValue, name: nameValue })
    );
  };
  React.useEffect(() => {
    if (regRequestFailed)
      dispatch(setError( "Регистрация не прошла" ));
  }, [dispatch, regRequestFailed]);
  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };
  const onChangePass = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(e.target.value);
  };
  if (user) {
    return (
      <Redirect
        to={{
          pathname: `${HOME_PAGE}/`,
        }}
      />
    );
  }
  return regRequest ? (
    <Awaiter />
  ) : (
    <form onSubmit={onSubmit}>
      <div className={styles.main}>
        <div className={styles.inner}>
          <p className="text text_type_main-large mb-6">Регистрация</p>

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
            <Button type="primary" size="small">
              Зарегистрироваться
            </Button>
          </div>

          <div className="mt-20">
            {error && <p className="text text_type_main-large mb-6">{error}</p>}
            <p className="text text_type_main-small">
              Уже зарегистрироаны? <Link to={`${HOME_PAGE}/login`}>Войти</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
