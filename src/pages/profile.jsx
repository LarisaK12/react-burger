import React from "react";
import AppHeader from "../components/app-header/app-header";
import ProfileData from "../components/profile-data/profile-data";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";

export const ProfilePage = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <section className={`pl-9 ${styles.section}`}>
          <nav>
            <NavLink
              to="/profile"
              className={styles.link}
              activeClassName={styles.alink}
            >
              <p className="text text_type_main-medium mt-3 mb-3">Профиль</p>
            </NavLink>
            <NavLink
              to="/orders"
              className={styles.link}
              activeClassName={styles.alink}
            >
              <p className="text text_type_main-medium mt-3 mb-3">
                История заказов
              </p>
            </NavLink>
            <NavLink
              to=""
              className={styles.link}
              activeClassName={styles.alink}
            >
              <p className="text text_type_main-medium mt-3 mb-3">Выход</p>
            </NavLink>
          </nav>
        </section>
        <span className="mr-15"></span>
        <section className={styles.section}>
          <ProfileData />
        </section>
      </main>
    </>
  );
};
