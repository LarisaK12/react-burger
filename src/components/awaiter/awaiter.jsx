import styles from "./awaiter.module.css";
export const Awaiter = () => {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <p className="text text_type_main-large m-20">
          Подождите, идет загрузка...
        </p>
      </div>
    </div>
  );
};
