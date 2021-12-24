import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AppHeader from "../components/app-header/app-header";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import styles from "./ingredient-details.module.css";
import { getIngredients } from "../services/actions/ingredients";
import { Awaiter } from "../components/awaiter/awaiter";
import { useParams } from "react-router-dom";

import { SET_CURRENT_INGREDIENT } from "../services/actions/ingredient-details";
export const IngredientDetailsPage = () => {
  let { id } = useParams();
  const currentIngredient = useSelector((store) =>
    store.ingredients.ingredients.find((i) => i._id === id)
  );
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );
  const dispatcher = useDispatch();
  React.useEffect(() => {
    if (!ingredients || ingredients.length === 0) dispatcher(getIngredients());
    dispatcher({ type: SET_CURRENT_INGREDIENT, id: id });
  }, [dispatcher, ingredients, id]);

  return ingredientsRequest ? (
    <>
      <Awaiter />
    </>
  ) : ingredientsFailed ? (
    <p className="text text_type_main-large">Не удалось загрузить ингредиент</p>
  ) : (
    <>
      <main className={styles.main}>
        <section className={styles.section}>
          {currentIngredient && (
            <IngredientDetails ingredient={currentIngredient} />
          )}
        </section>
      </main>
    </>
  );
};
