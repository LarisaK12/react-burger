import React, {FC} from "react" ;
import { TAddedIngredient, TIngredient } from "../../utils/types";
import styles from "./burger-ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../utils/hooks";
import { useDrag, DragPreviewImage } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { HOME_PAGE } from "../../utils/burger-constants";

const BurgerIngredientCard:FC<TIngredient> = (props) => {
  const counter = useSelector((store) =>
    store.constructor.burger
      ? store.constructor.burger.filter(
          (ingr:TAddedIngredient) => ingr._id === props._id
        ).length
      : 0
  );
  const [, dragRef, preview] = useDrag({ 
    type: "ingredient",
    item: { id: props._id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const location = useLocation();
  return (
    <Link
      key={props._id}
      to={{
        pathname: `${HOME_PAGE}/ingredient/${props._id}`,
        state: { background: location },
      }}
      className={styles.link}
    >
      <DragPreviewImage connect={preview} src={props.image} />
      <div className={styles.ingredient_card} id="ingredient" ref={dragRef}>
        {counter !== 0 && <Counter count={counter} size="default" />}
        <img
          src={props.image}
          className={`ml-4 mr-4 mb-1 ${styles.img}`}
          alt={props.name}
        />
        <span className={styles.price_div}>
          <p className="text text_type_digits-default mr-2 ">
            {props.price}
          </p>
          <CurrencyIcon type="primary" />
        </span>
        <p className={`text text_type_main-small mt-1 ${styles.item_center}`}>
          {props.name}
        </p>
      </div>
    </Link>
  );
}

export default BurgerIngredientCard;
