import { Location } from "history";
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
export type TMenuTab={
  id: string,
  title: string,
  ratio?: number,
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