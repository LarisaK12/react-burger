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
    setCurrentPage("orders");
    history.replace({ pathname: "/orders" });
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
              className={styles.left}
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
              className={styles.left}
            >
              <ListIcon
                type={currentPage === "orders" ? "primary" : "secondary"}
              />
            </HeaderItem>
          </div>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
          <HeaderItem
            text="личный кабинет"
            onClick={setProfile}
            className={styles.right}
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
