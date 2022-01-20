import { Link } from "react-router-dom";
import styles from "./page404.module.css";

export const Code404Page = () => {
  return (
    <>
      <main className={styles.main}>
        <div>
          <section className={styles.section}>
            <p className="text text_type_digits-large">404</p>
          </section>
          <section className={styles.section}>
            <p className="text text_type_main-large">Страница не найдена</p>
            <Link to="/">
              <span className="text text_type_main-medium">на главную</span>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};
