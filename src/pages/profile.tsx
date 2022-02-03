import React from "react";
import ProfileData from "../components/profile-data/profile-data";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";
import { useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "../utils/hooks";
import { logout } from "../services/actions/login";
export const ProfilePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.profile);
  React.useEffect(() => {
    if (location.pathname === "/exit") {
      dispatch(logout());
    }
  }, [location, dispatch]);
  
  return !user ? (
    <Redirect to="/login" />
  ) : (
    <main className={styles.main}>
      <section className={styles.section}>
        <nav>
          <div className={styles.divLink}>
            <NavLink
              className={"text text_type_main-medium " + styles.link}
              to="/profile"
            >
              <p
                className={
                  location.pathname === "/profile" ? styles.alink : styles.link
                }
              >
                {" "}
                Профиль
              </p>
            </NavLink>
          </div>
          <div className={styles.divLink}>
            <NavLink
              className={"text text_type_main-medium " + styles.link}
              to="/profile/orders"
            >
              <p
                className={
                  location.pathname === "/profile/orders"
                    ? styles.alink
                    : styles.link
                }
              >
                {" "}
                История заказов
              </p>
            </NavLink>
          </div>
          <div className={styles.divLink}>
            <NavLink
              className={"text text_type_main-medium " + styles.link}
              to="/exit"
            >
              <p
                className={
                  location.pathname === "/exit" ? styles.alink : styles.link
                }
              >
                {" "}
                Выход
              </p>
            </NavLink>
          </div>

          <div className={`pt-20 ${styles.divLink}`}>
            <p className="text text_type_main-small mt-3 mb-3">
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>
        </nav>
      </section>
      <span className="mr-15"></span>
      <section className={styles.section}>
        {location.pathname === "/profile" && <ProfileData />}
      </section>
    </main>
  );
};
