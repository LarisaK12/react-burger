import { Location } from "history";
import { TBurgerIngredientActions } from "../services/actions/burger-constructor";
import { TErrorActions } from "../services/actions/error";
import { TCurrentIngredientActions } from "../services/actions/ingredient-details";
import { TIngredientActions } from "../services/actions/ingredients";
import { TLoginActions } from "../services/actions/login";
import { TOrderActions } from "../services/actions/order-details";
import { TProfileActions } from "../services/actions/profile";
import { TTabActions } from "../services/actions/tab";
import {store} from "../services/store";
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TWSActions } from "../services/actions/ws";
export type TOrderQuantity = {
  title:string,
  quantity:number
}
export type TOrderLists ={
  ready:ReadonlyArray<number>,
  waiting:ReadonlyArray<number>,
}
export type TIngredient = {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
};
export type TAddedIngredient={
  _id: string,
  type: undefined|"top"|"bottom",
  isLocked: boolean,
  text: string,
  price: number,
  thumbnail: string,
  place: number,
  index?:number
}
export type TDraggingElement={
  id:string,
  index:number
}
export type TMenuTabName=   "bun"|"sauce"|"main";
export type TMenuTab={
  id: TMenuTabName,
  title: string,
  ratio: number,
}
export type TMenu={
 current:string,
 tabs:Array<TMenuTab>
}
export type TModalProps={
  header?:string,
  onClose:()=>void
}
export type TLocationState = {
  background?: Location,
  from?: Location,
  pathname:string
  
}
export type TCookieProps ={
  expires?:number|Date|string
}
export type TUser ={
  email:string,
  name?:string,
  password?:string
}
export type TResetPassword={
  password:string,
  token:string
}
export type TOrderShortDetails={
  number:number,
  name?:string,
  _id?:string
}
export type TOrderIngredients={
  ingredients:ReadonlyArray<string>,
}
export type TOrder =TOrderShortDetails &TOrderIngredients &{
  price?:number,
  status:string|null,
  createdAt:Date,
  updatedAt:Date
}

export type TWSResponse = {
  success :boolean,
  orders:ReadonlyArray<TOrder>,
  total:number,
  totalToday:number
}
export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TWSActions | TLoginActions|TProfileActions|TErrorActions|TIngredientActions|TBurgerIngredientActions|TCurrentIngredientActions|TOrderActions|TTabActions;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
