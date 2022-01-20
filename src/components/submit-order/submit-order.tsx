import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./submit-order.module.css";
import { useSelector } from "react-redux";
type TSubmitOrderProps={
  onClick : (e:React.SyntheticEvent)=>void
}
const SubmitOrder:React.FC<TSubmitOrderProps> = (props) => {
  const { price } = useSelector((store:any) => store.constructor);
  return (
    <form onSubmit={props.onClick}>
      <span className={styles.submit}>
        <p className="text text_type_digits-medium mr-2">{price ? price : 0}</p>
        <CurrencyIcon type="primary" />
        <span className="pl-10" />
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </span>
    </form>
  );
}
export default SubmitOrder;
