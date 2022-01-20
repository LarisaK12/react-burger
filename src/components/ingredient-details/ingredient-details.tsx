import React, {FC} from'react';
import { TIngredient } from "../../utils/types";
import styles from "./ingredient-details.module.css";
const  IngredientDetails: FC<TIngredient> = (props) => {
  return (
    <div className={styles.details_card}>
      <img src={props.image_large} alt={props.name}></img>
      <p className="text text_type_main-medium pt-4 pb-8">
        {props.name}
      </p>
      <div
        className={`text text_type_main-small text_color_inactive ${styles.details}`}
      >
        <div className={styles.details_part}>
          <p>Калории, ккал</p>
          <p>{props.calories}</p>
        </div>
        <div className="pl-5"></div>
        <div className={styles.details_part}>
          <p>Белки, г</p>
          <p>{props.proteins}</p>
        </div>
        <div className="pl-5"></div>
        <div className={styles.details_part}>
          <p>Жиры, г</p>
          <p>{props.fat}</p>
        </div>
        <div className="pl-5"></div>
        <div className={styles.details_part}>
          <p>Углеводы, г</p>
          <p>{props.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
}
export default IngredientDetails;
