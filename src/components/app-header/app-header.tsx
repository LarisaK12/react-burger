import React, { useCallback, useEffect } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import HeaderItem from "./app-header-item";
import { useHistory, useLocation, Link } from "react-router-dom";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { HOME_PAGE } from "../../utils/burger-constants";
function AppHeader() {
  const history = useHistory();
  const [currentPage, setCurrentPage] = React.useState("");
  const location = useLocation();
  useEffect(() => {
    const c=HOME_PAGE.split("/").length;
    if (location.pathname.split("/").length > c)
      setCurrentPage(location.pathname.split("/")[c]);
      
  }, [location]);
  const setConstructor = useCallback(() => {
    setCurrentPage("constructor");
    history.replace({ pathname: `${HOME_PAGE}/` });
  }, [history]);
  const setOrders = useCallback(() => {
    setCurrentPage("feed");
    history.replace({ pathname: `${HOME_PAGE}/feed` });
  }, [history]);
  const setProfile = useCallback(() => {
    setCurrentPage("profile");
    history.replace({ pathname: `${HOME_PAGE}/profile` });
  }, [history]);

  return (
    <header>
      <nav className=" p-4 ">
        <div className={styles.header}>
          <div className={styles.header}>
            <HeaderItem
              text="конструктор"
              onClick={setConstructor}
           
            >
              <BurgerIcon
                type={
                  !currentPage || currentPage === "constructor"
                    ? "primary"
                    : "secondary"
                }
              />
            </HeaderItem>
            <HeaderItem
              text="лента заказов"
              onClick={setOrders}
           
            >
              <ListIcon
                type={currentPage === "feed" ? "primary" : "secondary"}
              />
            </HeaderItem>
          </div>
          <Link to={`${HOME_PAGE}/`} className={styles.logo}>
            <Logo />
          </Link>
          <HeaderItem
            text="личный кабинет"
            onClick={setProfile}
           
          >
            <ProfileIcon
              type={currentPage === "profile" ? "primary" : "secondary"}
            />
          </HeaderItem>
        </div>
      </nav>
    </header>
  );
}
export default AppHeader;
