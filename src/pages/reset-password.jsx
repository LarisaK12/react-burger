import React from "react";
import AppHeader from "../components/app-header/app-header";
import styles from "./reset-password.module.css";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
export const ResetPasswordPage = () => {
  const [value, setValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChangePass = (e) => {
    setPassValue(e.target.value);
  };
  return (
    <>
      <AppHeader />
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
              placeholder="Введите новый пароль"
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
            <p className="text text_type_main-small">
              Вспомнили пароль? <a href="/login">Войти</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
