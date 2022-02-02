import React from "react";
import styles from "./burger-element.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  removeIngredient,
  moveIngredient,
} from "../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {TAddedIngredient, TDraggingElement} from "../../utils/types";
const BurgerElement : React.FC<TAddedIngredient>=(props)=> {
  const dispatch = useDispatch();
  const deleteIngredient = () => {
    dispatch(removeIngredient( props.place ));
  };
  const ref = React.useRef<HTMLSpanElement>(null);
  const [, dropRef] = useDrop({
    accept: "moving",
    hover(item:TDraggingElement, monitor:any) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index?props.index:0;
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
      dispatch(moveIngredient( dragIndex, hoverIndex ));
      item.index = hoverIndex;
    },
  });
  const [, dragRef] = useDrag({
    type: "moving",
    item: ():TDraggingElement => {
      return { id: props._id, index: props.index?props.index:0 };
    },
  });
  dropRef(dragRef(ref));

  return (
    <span className={styles.element} ref={ref}>
      {props.isLocked ? (
        <span className="pr-8" />
      ) : (
        <>
          <DragIcon type="primary"/>
          <span className="pr-1"></span>
        </>
      )}

      <ConstructorElement {...props} handleClose={deleteIngredient} />
    </span>
  );
}

export default React.memo(BurgerElement);
