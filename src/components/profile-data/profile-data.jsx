import React from "react";
import styles from "./profile-data.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

const ProfileData = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const [nameValue, setNameValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");

  const { user } = useSelector((store) => store.profile);
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const onChangePass = (e) => {
    setPassValue(e.target.value);
  };
  const onChangeName = (e) => {
    setNameValue(e.target.value);
  };
  return (
    <div className={styles.main}>
      <div className={styles.item}>
        <Input
          placeholder="Имя"
          icon={"EditIcon"}
          size="default"
          onChange={onChangeName}
          value={user?.name || ""}
        ></Input>
      </div>
      <span className="mb-6"></span>
      <div className={styles.item}>
        <EmailInput
          placeholder="Логин"
          icon={"EditIcon"}
          size="default"
          onChange={onChangeEmail}
          value={user?.email || ""}
        ></EmailInput>
      </div>
      <span className="mb-6"></span>
      <div className={styles.item}>
        <PasswordInput
          defaultValue=""
          placeholder="Пароль"
          size="default"
          name="password"
          value=""
          onChange={onChangePass}
        ></PasswordInput>
      </div>
    </div>
  );
};
export default ProfileData;
