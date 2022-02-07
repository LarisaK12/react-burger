import React, { useMemo } from "react";
import BurgerIngredientCard from "../burger-ingredient-card/burger-ingredient-card";
import styles from "./burger-ingredients-tab.module.css";
import { useSelector, useDispatch } from "../../utils/hooks";
import { setRatio } from "../../services/actions/tab";
import { useInView } from "react-intersection-observer";
import { TIngredient, TMenuTab } from "../../utils/types";

const BurgerIngredientsTab:React.FC<TMenuTab>=(props) =>{
  const { ingredients } = useSelector((store) => store.ingredients);
  const { ref, inView, entry } = useInView({
    // Массив процентов видимиости, при прохождении которых будет обновляться значение entry
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  const dispatch = useDispatch();

  const filteredIngredients = useMemo(
    () => ingredients.filter((ingredient:TIngredient) => ingredient.type === props.id),
    [ingredients, props.id]
  );
  React.useEffect(() => {
    dispatch(setRatio( props.id, entry ? entry.intersectionRatio : 0 ));
  }, [inView, entry, dispatch, props.id]); // При изменении данных/скролле, обновляем ratio

  return (
    <>
      <p className="text text_type_main-medium pl-4 pt-6 pb-10" id={props.id}>
        {props.title}
      </p>
      <div className={styles.ingretients_tab} ref={ref}>
        {filteredIngredients.map((ingredient:TIngredient) => (
          <BurgerIngredientCard
            key={ingredient._id}
            {...ingredient}
          ></BurgerIngredientCard>
        ))}
      </div>
    </>
  );
}
export default BurgerIngredientsTab;
