import { ingredientPropTypes } from "../../utils/types";
import styles from "./burger-ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useDrag, DragPreviewImage } from "react-dnd";
import { Link, useLocation } from "react-router-dom";

function BurgerIngredientCard(props) {
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
  const location = useLocation();
  return (
    <Link
      key={props.ingredient._id}
      to={{
        pathname: `/ingredient/${props.ingredient._id}`,
        state: { background: location },
      }}
      className={styles.link}
    >
      <DragPreviewImage connect={preview} src={props.ingredient.image} />
      <div className={styles.ingredient_card} ref={dragRef}>
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
    </Link>
  );
}
BurgerIngredientCard.propTypes = {
  ingredient: ingredientPropTypes,
};

export default BurgerIngredientCard;
