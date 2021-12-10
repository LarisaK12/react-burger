import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  CLEAR_INGREDIENTS,
} from "../actions/burger-constructor";
const initialState = {
  burger: [],
  price: 0,
};
export const burgerConstructor = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_INGREDIENTS:
      return { ...initialState };
    case ADD_INGREDIENT: //добавить ингредиент в бургер, если это булка и булка уже есть, то заменить
      if (!action.item) return state;
      let hasBun = state.burger
        ? state.burger.filter((ingr) => ingr.type === "top").length > 0
          ? 1
          : 0
        : 0;
      let burgerIngredients = state.burger ? [...state.burger] : [];

      if (action.item.type === "bun") {
        //булка добавится два раза
        burgerIngredients.splice(0, hasBun, {
          _id: action.item._id,
          type: "top",
          isLocked: true,
          text: action.item.name + "(верх)",
          price: action.item.price,
          thumbnail: action.item.image,
          place: 0,
        });
        let placeOfBottomBun = burgerIngredients.length - hasBun;
        burgerIngredients.splice(placeOfBottomBun, hasBun, {
          _id: action.item._id,
          type: "bottom",
          isLocked: true,
          text: action.item.name + "(низ)",
          price: action.item.price,
          thumbnail: action.item.image,
          place: placeOfBottomBun,
        });
      } else {
        //обычный ингредиент добавится один раз, если место указано неверно, то перед нижней булкой (если она есть)или просто в последнюю позицию

        let isOutOfRange =
          !action.place ||
          action.place < hasBun ||
          action.place > burgerIngredients.length - 1 - hasBun;
        let place = isOutOfRange //если место указано неверно, то ингрединт добавится перед нижней булкой
          ? burgerIngredients.length - hasBun
          : action.place;
        burgerIngredients.splice(place, 0, {
          _id: action.item._id,
          type: "undefined",
          isLocked: false,
          text: action.item.name,
          price: action.item.price,
          thumbnail: action.item.image,
          place: place,
        });
      }
      let price =
        burgerIngredients.length === 0
          ? 0
          : burgerIngredients
              .map((ingr) => ingr.price)
              .reduce((s, price) => s + price);
      return { ...state, burger: burgerIngredients, price: price };
    case REMOVE_INGREDIENT: //если бургер не пуст и ингредиент есть, то удалить. если есть два и более одинаковых ингредиентов, то удалить только нужный
      if (
        !state.burger ||
        action.place < 0 ||
        action.place > state.burger.length - 1
      )
        return state;
      let newburger = [...state.burger];
      newburger.splice(action.place, 1);

      let newprice =
        newburger.length === 0
          ? 0
          : newburger.map((ingr) => ingr.price).reduce((s, price) => s + price);
      newburger.forEach((ingr, index) => (ingr.place = index));
      return {
        burger: newburger,
        price: newprice,
      };
    case MOVE_INGREDIENT: //изменить порядок ингредиента, если он не совпадает с текущим.
      if (!action.oldPlace || !action.newPlace) return { ...state };
      if (
        !state.burger ||
        action.oldPlace < 1 ||
        action.oldPlace > state.burger.length - 2
      )
        return { ...state };
      let anewburger = [...state.burger];
      let deleted = anewburger.splice(action.oldPlace, 1)[0];
      anewburger.splice(action.newPlace, 0, deleted);
      anewburger.forEach((ingr, index) => (ingr.place = index));
      return {
        ...state,
        burger: anewburger,
      };
    default:
      return state;
  }
};
