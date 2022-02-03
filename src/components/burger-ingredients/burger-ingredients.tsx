import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsTab from "../burger-ingredients-tab/burger-ingredients-tab";
import { useSelector, useDispatch } from "../../utils/hooks";
import { setError, clearError } from "../../services/actions/error";
import { setTab } from "../../services/actions/tab";
import { TMenuTab } from "../../utils/types";

function BurgerIngredients() {
  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store:any) => store.ingredients
  );
  const { tabs, current } = useSelector((store) => store.tab);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const element = document.getElementById(current);
    element?.scrollIntoView();
  }, [current]);
  React.useEffect(() => {
    if (ingredientsFailed)
      dispatch(setError("Не удалось загрузить ингредиенты" ));
    else dispatch(clearError());
  }, [dispatch, ingredientsFailed]);
  const setActiveTab = (value:string) => {
    dispatch(setTab(value));
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
            {tabs.map((tab:TMenuTab, index:number) => (
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
        <BurgerIngredientsTab id="bun" title="Булки" ratio={1}></BurgerIngredientsTab>
        <BurgerIngredientsTab id="sauce" title="Соусы" ratio={0}></BurgerIngredientsTab>
        <BurgerIngredientsTab
          id="main"
          title="Начинки"
          ratio={0}
        ></BurgerIngredientsTab>
      </div>
    </div>
  );
}
export default BurgerIngredients;
