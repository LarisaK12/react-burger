import React from "react";
import AppHeader from "../components/app-header/app-header";
import styles from "./forgot-password.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
export const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
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
            <p className="text text_type_main-small">
              Вспомнили пароль? <a href="/login">Войти</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
