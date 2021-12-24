import React, { useMemo } from "react";
import styles from "./burger-constructor.module.css";
import BurgerElement from "../burger-element/burger-element";
import SubmitOrder from "../submit-order/submit-order";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { RESET_ORDER } from "../../services/actions/order-details";
import { useSelector, useDispatch } from "react-redux";
import { submitOrder } from "../../services/actions/order-details";
import { SET_ERROR } from "../../services/actions/error";
import {
  ADD_INGREDIENT,
  CLEAR_INGREDIENTS,
} from "../../services/actions/burger-constructor";
import { useHistory } from "react-router-dom";
import { useDrop } from "react-dnd";

function BurgerConstructor() {
  const history = useHistory();
  const { burger } = useSelector((store) => store.constructor);
  const { user } = useSelector((store) => store.profile);
  const { ingredients } = useSelector((store) => store.ingredients);
  const { orderId, submitOrderFailed } = useSelector((store) => store.order);
  const dispatch = useDispatch();
  const top = useMemo(
    () => (burger ? burger.filter((b) => b.type === "top")[0] : null),
    [burger]
  );
  const bottom = useMemo(
    () => (burger ? burger.filter((b) => b.type === "bottom")[0] : null),
    [burger]
  );
  const middleIngredients = useMemo(
    () => (burger ? burger.filter((ingr) => ingr.type === "undefined") : null),
    [burger]
  );
  const closeModal = () => {
    dispatch({ type: RESET_ORDER });
    dispatch({ type: CLEAR_INGREDIENTS });
  };

  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!user) history.replace({ pathname: "/login" });
    if (!burger || burger.filter((i) => i.type !== "undefined").length === 0)
      dispatch({ type: SET_ERROR, error: "Без булок мы готовить не умеем." });
    else dispatch(submitOrder(burger.map((ingr) => ingr._id)));
  };

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch({
        type: ADD_INGREDIENT,
        item: ingredients.filter((ingr) => ingr._id === item.itemId)[0],
      });
    },
  });

  React.useEffect(() => {
    if (submitOrderFailed)
      dispatch({
        type: SET_ERROR,
        error: "Не удалось отправить заказ. Попробуйте еще раз.",
      });
  }, [dispatch, submitOrderFailed]);
  return (
    <>
      <div className={styles.burger} ref={dropTarget}>
        {Boolean(burger && burger.length) && (
          <>
            {top && <BurgerElement {...top} isLocked={true}></BurgerElement>}
            <div className="pb-4" />
            {middleIngredients && (
              <div className={styles.scrollable}>
                {middleIngredients.map((ingredient, index) => (
                  <React.Fragment key={ingredient.place}>
                    <BurgerElement
                      {...ingredient}
                      index={ingredient.place}
                    ></BurgerElement>
                    <div className="pb-4" />
                  </React.Fragment>
                ))}
              </div>
            )}
            <div className="pb-4" />
            {bottom && (
              <BurgerElement {...bottom} isLocked={true}></BurgerElement>
            )}
          </>
        )}
      </div>

      <div className="pt-10"></div>
      <SubmitOrder onClick={onSubmit} />
      {orderId && (
        <Modal onClose={closeModal} header="">
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}
export default BurgerConstructor;
