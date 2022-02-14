import React from "react";
import ProfileData from "../components/profile-data/profile-data";
import ProfileOrdersData from "../components/profile-orders-data/profile-orders-data";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";
import { useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "../utils/hooks";
import { logout } from "../services/actions/login";
import {startConnection, closeConnection} from "../services/actions/ws";
import { getToken } from "../utils/utils";
import { HOME_PAGE } from "../utils/burger-constants";

export const ProfilePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.profile);
  React.useEffect(() => {
    if (location.pathname === `${HOME_PAGE}/exit`) {
      dispatch(logout());
    }
  }, [location, dispatch]);
  React.useEffect(()=>{   
    getToken().then((res)=>{
     dispatch(startConnection(res));
    })
    .catch((e)=>{
      dispatch(logout());
    })
return ()=>{ dispatch(closeConnection())}
  },[dispatch])
    
  return !user ? (
    <Redirect to={`${HOME_PAGE}/login`} />
  ) : (
    <main className={styles.main}>
      <section className={styles.section}>
        <nav>
          <div className={styles.divLink}>
            <NavLink
              className={"text text_type_main-medium " + styles.link}
              to={`${HOME_PAGE}/profile`}
            >
              <p
                className={
                  location.pathname === `${HOME_PAGE}/profile` ? styles.alink : styles.link
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
              to={`${HOME_PAGE}/profile/orders`}
            >
              <p
                className={
                  location.pathname ===`${HOME_PAGE}/profile/orders` 
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
              to={`${HOME_PAGE}/exit`}
            >
              <p
                className={
                  location.pathname === `${HOME_PAGE}/exit` ? styles.alink : styles.link
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
        {location.pathname === `${HOME_PAGE}/profile` && <ProfileData />}
        {location.pathname === `${HOME_PAGE}/profile/orders` && <ProfileOrdersData />}
      </section>
    </main>
  );
};
