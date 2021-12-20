import styles from "./constructor.module.css";
import AppHeader from "../components/app-header/app-header";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import React from "react";
import Modal from "../components/modal/modal";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../services/actions/ingredients";
import { CLEAR_ERROR } from "../services/actions/error";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export const ConstructorPage = () => {
  const { error } = useSelector((store) => store.error);
  const dispatcher = useDispatch();
  React.useEffect(() => {
    dispatcher(getIngredients());
  }, [dispatcher]);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <section className={`pl-9 ${styles.section}`}>
            <BurgerIngredients />
          </section>
          <div className="ml-10" />
          <section className={`mt-25 pr-9 ${styles.section}`}>
            <BurgerConstructor />
          </section>
        </DndProvider>
        {error && (
          <Modal
            header="Печалька :("
            onClose={() => dispatcher({ type: CLEAR_ERROR })}
          >
            <span className="text text_type_main-medium">{`"${error}"`}</span>
          </Modal>
        )}
      </main>
    </>
  );
};
