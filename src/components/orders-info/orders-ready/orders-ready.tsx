import React  from "react";
import {TOrderQuantity} from "../../../utils/types";
const OrdersReady:React.FC<TOrderQuantity>=(props)=>{
    return(
        <div className="mt-15">
            <p className="ml-2 text text_type_main-default">{props.title}</p>
            <div className="mt-15"></div>
            <p className="ml-2 text text_type_digits-large">{props.quantity}</p>
        </div>

    )
}
export default OrdersReady