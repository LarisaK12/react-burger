import React  from "react";
import {TOrderQuantity} from "../../../utils/types";
const OrdersReady:React.FC<TOrderQuantity>=(props)=>{
    return(
        <div className="mt-5">
            <p className="ml-2 text text_type_main-small">{props.title}</p>
            <div className="mt-5"></div>
            <p className="ml-2 text text_type_digits-medium">{props.quantity}</p>
        </div>

    )
}
export default OrdersReady