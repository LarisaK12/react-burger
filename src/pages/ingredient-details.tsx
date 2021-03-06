import React from "react";
import { useSelector, useDispatch } from "../utils/hooks";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import styles from "./ingredient-details.module.css";
import { Awaiter } from "../components/awaiter/awaiter";
import { useParams } from "react-router-dom";

import { setCurrentIngredient } from "../services/actions/ingredient-details";
import { TIngredient } from "../utils/types";
export const IngredientDetailsPage = () => {
  let { id }:{id:string} = useParams();
  const currentIngredient = useSelector((store) =>
    store.ingredients.ingredients.find((i:TIngredient) => i._id === id)
  );
  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );
  const dispatcher = useDispatch();
  React.useEffect(() => {
    dispatcher(setCurrentIngredient(id));
  }, [dispatcher, id]);
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
            <IngredientDetails {...currentIngredient} />
          )}
        </section>
      </main>
    </>
  );
};
