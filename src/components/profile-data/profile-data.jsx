import styles from "./profile-data.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ProfileData = () => {
  return (
    <div className={styles.main}>
      <div className={styles.item}>
        <Input placeholder="Имя" icon={"EditIcon"} size="default"></Input>
      </div>
      <span className="mb-6"></span>
      <div className={styles.item}>
        <Input placeholder="Логин" icon={"EditIcon"} size="default"></Input>
      </div>
      <span className="mb-6"></span>
      <div className={styles.item}>
        <PasswordInput></PasswordInput>
      </div>
    </div>
  );
};
export default ProfileData;
