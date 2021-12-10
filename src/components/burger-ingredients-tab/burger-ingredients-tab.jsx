import React from "react";
import PropTypes from "prop-types";
import BurgerIngredientCard from "../burger-ingredient-card/burger-ingredient-card";
import styles from "./burger-ingredients-tab.module.css";
import { useSelector, useDispatch } from "react-redux";
import { SET_RATIO } from "../../services/actions/tab";
import { useInView } from "react-intersection-observer";

function BurgerIngredientsTab(props) {
  const { ingredients } = useSelector((store) => store.ingredients);
  const { ref, inView, entry } = useInView({
    // Массив процентов видимиости, при прохождении которых будет обновляться значение entry
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  const dispatch = useDispatch();

  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.type === props.id
  );
  React.useEffect(() => {
    dispatch({
      type: SET_RATIO,
      id: props.id,
      ratio: entry ? entry.intersectionRatio : 0,
    });
  }, [inView, entry, dispatch, props.id]); // При изменении данных/скролле, обновляем ratio

  return (
    <>
      <p className="text text_type_main-medium pl-4 pt-6 pb-10" id={props.id}>
        {props.tabname}
      </p>
      <div className={styles.ingretients_tab} ref={ref}>
        {filteredIngredients.map((ingredient, index) => (
          <BurgerIngredientCard
            key={ingredient._id}
            ingredient={ingredient}
          ></BurgerIngredientCard>
        ))}
      </div>
    </>
  );
}
BurgerIngredientsTab.propTypes = {
  id: PropTypes.string.isRequired,
  tabname: PropTypes.string.isRequired,
};
export default BurgerIngredientsTab;
