import { ingredientPropTypes } from "../../utils/types";
import styles from "./burger-ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { SET_CURRENT_INGREDIENT } from "../../services/actions/ingredient-details";
import { useDrag, DragPreviewImage } from "react-dnd";

function BurgerIngredientCard(props) {
  const dispatch = useDispatch();
  const counter = useSelector((store) =>
    store.constructor.burger
      ? store.constructor.burger.filter(
          (ingr) => ingr._id === props.ingredient._id
        ).length
      : 0
  );
  const [{ isDrag }, dragRef, preview] = useDrag({
    type: "ingredient",
    item: { itemId: props.ingredient._id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const openModal = () => {
    dispatch({ type: SET_CURRENT_INGREDIENT, id: props.ingredient._id });
  };

  return (
    <>
      <DragPreviewImage connect={preview} src={props.ingredient.image} />
      <div className={styles.ingredient_card} onClick={openModal} ref={dragRef}>
        {counter !== 0 && <Counter count={counter} size="default" />}
        <img
          src={props.ingredient.image}
          className={`ml-4 mr-4 mb-1 ${styles.img}`}
          alt={props.ingredient.name}
        />
        <span className={styles.price_div}>
          <p className="text text_type_digits-default mr-2 ">
            {props.ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </span>
        <p className={`text text_type_main-small mt-1 ${styles.item_center}`}>
          {props.ingredient.name}
        </p>
      </div>
    </>
  );
}
BurgerIngredientCard.propTypes = {
  ingredient: ingredientPropTypes,
};

export default BurgerIngredientCard;
