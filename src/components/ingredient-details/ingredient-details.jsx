import { ingredientPropTypes } from "../../utils/types";
import styles from "./ingredient-details.module.css";
function IngredientDetails(props) {
  return (
    <div className={styles.details_card}>
      <img src={props.ingredient.image_large} alt={props.ingredient.name}></img>
      <p className="text text_type_main-medium pt-4 pb-8">
        {props.ingredient.name}
      </p>
      <div
        className={`text text_type_main-small text_color_inactive ${styles.details}`}
      >
        <div className={styles.details_part}>
          <p>Калории, ккал</p>
          <p>{props.ingredient.calories}</p>
        </div>
        <div className="pl-5"></div>
        <div className={styles.details_part}>
          <p>Белки, г</p>
          <p>{props.ingredient.proteins}</p>
        </div>
        <div className="pl-5"></div>
        <div className={styles.details_part}>
          <p>Жиры, г</p>
          <p>{props.ingredient.fat}</p>
        </div>
        <div className="pl-5"></div>
        <div className={styles.details_part}>
          <p>Углеводы, г</p>
          <p>{props.ingredient.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient: ingredientPropTypes,
};
export default IngredientDetails;
