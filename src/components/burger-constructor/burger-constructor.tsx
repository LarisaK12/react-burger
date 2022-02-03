import React, { useMemo } from "react";
import styles from "./burger-constructor.module.css";
import BurgerElement from "../burger-element/burger-element";
import SubmitOrder from "../submit-order/submit-order";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { resetOrder } from "../../services/actions/order-details";
import { useSelector, useDispatch } from "react-redux";
import { submitOrder } from "../../services/actions/order-details";
import { setError } from "../../services/actions/error";
import {
  addIngredient,
  clearIngredients,
} from "../../services/actions/burger-constructor";
import { useHistory } from "react-router-dom";
import { useDrop } from "react-dnd";
import {TAddedIngredient,TIngredient, TDraggingElement} from "../../utils/types";

function BurgerConstructor() {
  const history = useHistory();
  const { burger } = useSelector((store:any) => store.constructor);
  const { user } = useSelector((store:any) => store.profile);
  const { ingredients } = useSelector((store:any) => store.ingredients);
  const { orderId, submitOrderFailed } = useSelector((store:any) => store.order);
  const dispatch = useDispatch();
  const top = useMemo(
    () => (burger ? burger.filter((b:TAddedIngredient) => b.type === "top")[0] : null),
    [burger]
  );
  const bottom = useMemo(
    () => (burger ? burger.filter((b:TAddedIngredient) => b.type === "bottom")[0] : null),
    [burger]
  );
  const middleIngredients = useMemo(
    () => (burger ? burger.filter((ingr:TAddedIngredient) => ingr.type !== "bottom" && ingr.type !== "top") : null),
    [burger]
  );
  const closeModal = () => {
    dispatch(resetOrder());
    dispatch(clearIngredients());
  };

  const onSubmit = (e:React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!user) history.replace({ pathname: "/login" });
    if (!burger || burger.filter((i:TAddedIngredient) => i.type === "bottom" || i.type === "top").length === 0)
      dispatch(setError( "Без булок мы готовить не умеем." ));
    else dispatch(submitOrder(burger.map((ingr:TAddedIngredient) => ingr._id)));
  };

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item:TDraggingElement) {
      dispatch(addIngredient(ingredients.filter((ingr:TIngredient) => ingr._id === item.id)[0]));
    },
  });

  React.useEffect(() => {
    if (submitOrderFailed)
      dispatch(setError("Не удалось отправить заказ. Попробуйте еще раз."));
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
                {middleIngredients.map((ingredient:TAddedIngredient, index:number) => (
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
