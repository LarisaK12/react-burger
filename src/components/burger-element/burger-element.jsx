import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-element.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
} from "../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
function BurgerElement(props) {
  const dispatch = useDispatch();
  const deleteIngredient = () => {
    dispatch({ type: REMOVE_INGREDIENT, place: props.place });
  };
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: "moving",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch({
        type: MOVE_INGREDIENT,
        oldPlace: dragIndex,
        newPlace: hoverIndex,
      });
      item.index = hoverIndex;
    },
  });
  const [, drag] = useDrag({
    type: "moving",
    item: () => {
      return { id: props._id, index: props.index };
    },
  });

  drag(drop(ref));

  return (
    <span className={styles.element} ref={ref}>
      {props.isLocked ? (
        <span className="pr-8" />
      ) : (
        <>
          <DragIcon />
          <span className="pr-1"></span>
        </>
      )}

      <ConstructorElement {...props} handleClose={deleteIngredient} />
    </span>
  );
}
BurgerElement.propTypes = {
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  place: PropTypes.number.isRequired,
};

export default React.memo(BurgerElement);
