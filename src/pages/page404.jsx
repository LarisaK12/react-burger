import React from "react";
import AppHeader from "../components/app-header/app-header";
import styles from "./page404.module.css";

export const Code404Page = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <div>
          <section className={styles.section}>
            <p className="text text_type_digits-large">404</p>
          </section>
          <section className={styles.section}>
            <p className="text text_type_main-large">Страница не найдена</p>
            <a href="/">
              <span className="text text_type_main-medium">на главную</span>
            </a>
          </section>
        </div>
      </main>
    </>
  );
};
