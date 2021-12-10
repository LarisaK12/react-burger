import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsTab from "../burger-ingredients-tab/burger-ingredients-tab";
import { useSelector, useDispatch } from "react-redux";
import { SET_ERROR, CLEAR_ERROR } from "../../services/actions/error";
import { SET_TAB } from "../../services/actions/tab";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { CLEAR_CURRENT_INGREDIENT } from "../../services/actions/ingredient-details";

function BurgerIngredients() {
  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );
  const { tabs, current } = useSelector((store) => store.tab);
  const currentIngredientId = useSelector(
    (store) => store.currentIngredient.id
  );
  const currentIngredient = useSelector((store) =>
    store.ingredients.ingredients.find((i) => i._id === currentIngredientId)
  );
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: CLEAR_CURRENT_INGREDIENT });
  };
  React.useEffect(() => {
    const element = document.getElementById(current);
    element.scrollIntoView();
  }, [current]);
  React.useEffect(() => {
    if (ingredientsFailed)
      dispatch({ type: SET_ERROR, error: "Не удалось загрузить ингредиенты" });
    else dispatch({ type: CLEAR_ERROR });
  }, [dispatch, ingredientsFailed]);
  const setActiveTab = (value) => {
    dispatch({ type: SET_TAB, current: value });
  };

  return (
    <div className={" pt-10"}>
      <p className="text text_type_main-large">Соберите бургер</p>
      <div className="mt-5 mb-10" style={{ display: "flex" }}>
        {ingredientsFailed ? (
          <p className="text text_type_main-large">Произошла ошибка.</p>
        ) : ingredientsRequest ? (
          <p className="text text_type_main-large">Загружаем...</p>
        ) : (
          <>
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                value={tab.id}
                active={tab.id === current}
                onClick={setActiveTab}
              >
                {tab.title}
              </Tab>
            ))}
          </>
        )}
      </div>
      <div className={styles.ingredients}>
        <BurgerIngredientsTab id="bun" tabname="Булки"></BurgerIngredientsTab>
        <BurgerIngredientsTab id="sauce" tabname="Соусы"></BurgerIngredientsTab>
        <BurgerIngredientsTab
          id="main"
          tabname="Начинки"
        ></BurgerIngredientsTab>
      </div>
      {currentIngredientId && (
        <Modal onClose={closeModal} header="Детали ингредиента">
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      )}
    </div>
  );
}
export default BurgerIngredients;
