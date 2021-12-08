import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import React from "react";
import Modal from "../modal/modal";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { CLEAR_ERROR } from "../../services/actions/error";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const { error } = useSelector((store) => store.error);
  const dispatcher = useDispatch();
  React.useEffect(() => {
    dispatcher(getIngredients());
  }, [dispatcher]);

  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <section className={`pl-9 ${styles.section}`}>
            <BurgerIngredients />
          </section>
          <div className="ml-10" />
          <div id="react-modals" className={styles.modal}></div>
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
}
export default App;
