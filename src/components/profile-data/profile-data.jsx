import React from "react";
import styles from "./profile-data.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../services/actions/profile";
import { SET_ERROR, CLEAR_ERROR } from "../../services/actions/error";

const ProfileData = () => {
  const [emailValue, setEmailValue] = React.useState(null);
  const [nameValue, setNameValue] = React.useState(null);

  const { user, setProfileRequest, setProfileRequestFailed } = useSelector(
    (store) => store.profile
  );
  const { error } = useSelector((store) => store.error);
  const dispatch = useDispatch();
  const onCancel = (e) => {
    e.preventDefault();
    setEmailValue(null);
    setNameValue(null);
  };
  const onSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: CLEAR_ERROR });
    dispatch(
      setUser({ name: nameValue || user.name, email: emailValue || user.email })
    );
  };
  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmailValue(e.target.value);
  };
  const onChangePass = (e) => {
    e.preventDefault();
  };
  const onChangeName = (e) => {
    e.preventDefault();
    setNameValue(e.target.value);
  };
  React.useEffect(() => {
    if (setProfileRequestFailed) {
      dispatch({ type: SET_ERROR, error: "Данные не были сохранены" });

      setEmailValue(null);
      setNameValue(null);
    }
  }, [user, dispatch, setProfileRequestFailed]);
  return (
    <form onSubmit={onSave}>
      <div className={styles.main}>
        <div className={styles.item}>
          <Input
            placeholder="Имя"
            icon={"EditIcon"}
            size="default"
            onChange={onChangeName}
            value={nameValue || nameValue === "" ? nameValue : user?.name}
          ></Input>
        </div>
        <span className="mb-6"></span>
        <div className={styles.item}>
          <EmailInput
            placeholder="Логин"
            icon={"EditIcon"}
            size="default"
            onChange={onChangeEmail}
            value={emailValue || emailValue === "" ? emailValue : user?.email}
          ></EmailInput>
        </div>
        <span className="mb-6"></span>
        <div className={styles.item}>
          <PasswordInput
            defaultValue=""
            placeholder="Пароль"
            size="default"
            name="password"
            value={""}
            onChange={onChangePass}
          ></PasswordInput>
        </div>
        <span className="mt-6" />
        {((emailValue && emailValue !== user?.email) ||
          (nameValue && nameValue !== user?.name)) && (
          <div className={styles.item}>
            <Button type="primary" size="medium" className="mr-3">
              Сохранить
            </Button>
            <Button
              type="primary"
              size="medium"
              className="ml-3"
              onClick={onCancel}
            >
              Отмена
            </Button>
          </div>
        )}
        <div className={styles.item}>
          <p className="text text_type_main-medium">
            {setProfileRequest ? "Идет сохранение данных" : error}
          </p>
        </div>
      </div>
    </form>
  );
};
export default ProfileData;
