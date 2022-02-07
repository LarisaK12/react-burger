import { TMenuTab } from "../../utils/types";
import { SET_TAB, SET_RATIO, TTabActions } from "../actions/tab";

export type TTabState = {
  current: string,
  tabs: ReadonlyArray<TMenuTab>
};
const initialState:TTabState = {
  current: "bun",
  tabs: [
    {
      id: "bun",
      title: "Булки",
      ratio: 0,
    },
    {
      id: "sauce",
      title: "Соусы",
      ratio: 0,
    },
    {
      id: "main",
      title: "Начинки",
      ratio: 0,
    },
  ],
};
export const tabReducer = (state:TTabState = initialState, action:TTabActions):TTabState => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        current: action.current,
        tabs: state.tabs.map((t) =>
          t.id === action.current ? { ...t, ratio: 1.1 } : t
        ),
      };
    case SET_RATIO:
      let newTabs = state.tabs.map((t) =>
        t.id === action.id ? { ...t, ratio: action.ratio } : t
      );
      let newCurrent = newTabs.reduce((prev, next) => {
        return  prev.ratio < next.ratio ? next : prev;
      }, newTabs[0]).id;
      return {
        ...state,
        tabs: newTabs,
        current: newCurrent,
      };
    default:
      return state;
  }
};
