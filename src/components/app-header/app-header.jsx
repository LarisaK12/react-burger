import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import HeaderItem from "./app-header-item";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
function AppHeader() {
  const [currentPage, setCurrentPage] = React.useState("constructor");
  const setConstructor = () => setCurrentPage("constructor");
  const setOrders = () => setCurrentPage("orders");
  const setProfile = () => setCurrentPage("profile");
  return (
    <header>
      <nav className=" p-4 ">
        <div className={styles.header}>
          <HeaderItem text="конструктор" onClick={setConstructor}>
            <BurgerIcon
              type={currentPage === "constructor" ? "primary" : "secondary"}
            />
          </HeaderItem>
          <HeaderItem text="лента заказов" onClick={setOrders}>
            <ListIcon
              type={currentPage === "orders" ? "primary" : "secondary"}
            />
          </HeaderItem>
          <span className={styles.logo}>
            <Logo />
          </span>
          <HeaderItem text="личный кабинет" onClick={setProfile}>
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
