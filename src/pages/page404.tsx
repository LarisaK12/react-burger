import { Link } from "react-router-dom";
import styles from "./page404.module.css";
import { HOME_PAGE } from "../utils/burger-constants";

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
            <Link to={`${HOME_PAGE}/`}>
              <span className="text text_type_main-medium">на главную</span>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};
