import PropTypes from "prop-types";
import styles from "./burger-ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT,
} from "../../services/actions/ingredient-details";
import { useDrag } from "react-dnd";

function BurgerIngredientCard(props) {
  const currentIngredientId = useSelector(
    (store) => store.currentIngredient.id
  );
  const dispatch = useDispatch();
  const counter = useSelector((store) =>
    store.constructor.burger
      ? store.constructor.burger.filter(
          (ingr) => ingr._id === props.ingredient._id
        ).length
      : 0
  );
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { itemId: props.ingredient._id },
  });
  const openModal = () => {
    dispatch({ type: SET_CURRENT_INGREDIENT, id: props.ingredient._id });
  };
  const closeModal = () => {
    dispatch({ type: CLEAR_CURRENT_INGREDIENT });
  };
  return (
    <>
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
      {currentIngredientId === props.ingredient._id && (
        <Modal onClose={closeModal} header="Детали ингредиента">
          <IngredientDetails ingredient={props.ingredient} />
        </Modal>
      )}
    </>
  );
}
const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
});
BurgerIngredientCard.propTypes = {
  ingredient: ingredientPropTypes,
};

export default BurgerIngredientCard;
