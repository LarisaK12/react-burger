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
function AppHeader() {
  const history = useHistory();
  const [currentPage, setCurrentPage] = React.useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.split("/").length > 1)
      setCurrentPage(location.pathname.split("/")[1]);
  }, [location]);
  const setConstructor = useCallback(() => {
    setCurrentPage("constructor");
    history.replace({ pathname: "/" });
  }, [history]);
  const setOrders = useCallback(() => {
    setCurrentPage("feed");
    history.replace({ pathname: "/feed" });
  }, [history]);
  const setProfile = useCallback(() => {
    setCurrentPage("profile");
    history.replace({ pathname: "/profile" });
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
          <Link to="/" className={styles.logo}>
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
