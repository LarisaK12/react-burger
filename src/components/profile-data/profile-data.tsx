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
import { setError, clearError } from "../../services/actions/error";

const ProfileData = () => {
  const [emailValue, setEmailValue] = React.useState<string|null>(null);
  const [nameValue, setNameValue] = React.useState<string|null>(null);

  const { user, setProfileRequest, setProfileRequestFailed } = useSelector(
    (store:any) => store.profile
  );
  const { error } = useSelector((store:any) => store.error);
  const dispatch = useDispatch();
  const onCancel = () => {
    setEmailValue(null);
    setNameValue(null);
  };
  const onSave = (e:React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(clearError());
    dispatch(
      setUser({ name: nameValue || user.name, email: emailValue || user.email })
    );
  };
  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmailValue(e.target.value);
  };
  const onChangePass = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNameValue(e.target.value);
  };
  React.useEffect(() => {
    if (setProfileRequestFailed) {
      dispatch(setError("Данные не были сохранены" ));

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
            name="Email"
            size="default"
            onChange={onChangeEmail}
            value={emailValue || emailValue === "" ? emailValue : user?.email}
          ></EmailInput>
        </div>
        <span className="mb-6"></span>
        <div className={styles.item}>
          <PasswordInput
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
            <span className="mr-3">
            <Button type="primary" size="medium" >
              Сохранить
            </Button>
            </span>
            <span className="ml-3">
            <Button
              type="primary"
              size="medium"
              
              onClick={onCancel}
            >
              Отмена
            </Button>
            </span>
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
