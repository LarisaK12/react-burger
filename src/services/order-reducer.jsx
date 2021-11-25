export function OrderReducer(state,action){
switch(action.type){
    case "add":
        //если добавляют булку и она есть, то ничего не изменится
        if(action.item.type==="bun" && state.burger.filter(ingr=>ingr.type==="top").length > 0)
            return {...state};
        
        let burgerIngredients = [...state.burger];
               
        if(action.item.type === "bun"){//булка добавится два раза
            burgerIngredients.splice(0,0,{
                "_id":action.item._id,
                "type": "top",
                "isLocked":true,
                "text":action.item.name+"(верх)",
                "price":action.item.price,
                "thumbnail":action.item.image
            }) ;
            burgerIngredients.splice(burgerIngredients.length-1,0,{
                "_id":action.item._id,
                "type": "bottom",
                "isLocked":true,
                "text":action.item.name+"(низ)",
                "price":action.item.price,
                "thumbnail":action.item.image
            });
        }
        else{//обычный ингредиент добавится один раз, если место указано неверно, то перед нижней булкой (если она есть)или просто в последнюю позицию
            let place ;
            if(burgerIngredients.filter(ingr=>ingr.type!=="undefined").length)
                place = (action.place>burgerIngredients.length-2 || action.place<1)?burgerIngredients.length-2:action.place;
            else
                place= (action.place>burgerIngredients.length-1 || action.place<0)?burgerIngredients.length-1:action.place;
            burgerIngredients.splice(place,0,{
            "_id":action.item._id,
            "type": "undefined",
            "isLocked":false,
            "text":action.item.name,
            "price":action.item.price,
            "thumbnail":action.item.image
      })}
        let price = burgerIngredients.length===0?0:burgerIngredients.map(ingr=>ingr.price).reduce((s,price)=>s+price) ;        
        return {...state, burger:burgerIngredients, price:price};
    case "delete":
        let newburger=state.burger.filter(b=>b._id!==action.item._id);
        let newprice = newburger.length===0?0:newburger.map(ingr=>ingr.price).reduce((s,price)=>s+price) ;
        return{ orderId:null, orderName:"", burger:newburger,price :newprice }
    case "setOrderId":
        return {...state,orderId:action.orderId}
    default: return{...state}
}
}