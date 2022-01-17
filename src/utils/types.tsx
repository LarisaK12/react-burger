import PropTypes from "prop-types";
export const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
});

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
  background: Location
  
}