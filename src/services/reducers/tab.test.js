
import { SET_TAB, SET_RATIO } from "../actions/tab";
import {tabReducer} from "../reducers/tab";

const initialState = {
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
describe('Tab reducer', () => {
    it('reducer должен вернуть начальное состояние', () => {
      
      expect(tabReducer(undefined, {})).toEqual(initialState)
      
    })
    it('reducer должен изменить tab', () => {
        const tab = 'sauce';
        
        const expectedState = {
            current:tab,
            tabs: [
            {
                id: "bun",
                title: "Булки",
                ratio: 0,
            },
            {
                id: "sauce",
                title: "Соусы",
                ratio: 1.1,
            },
            {
                id: "main",
                title: "Начинки",
                ratio: 0,
            },
            ]
          }

        expect(tabReducer(initialState, {type: SET_TAB, current:tab})).toEqual(expectedState)
         
      })
      it('reducer должен изменить ratio', () => {
        const tab = 'bun';
        const ratio = 0.5;
        const expectedState = {
                    current: "bun",
            tabs: [
            {
                id: "bun",
                title: "Булки",
                ratio: ratio,
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
            ]
          }
        expect(tabReducer(initialState, {type: SET_RATIO, id:tab, ratio:ratio})).toEqual(expectedState)
         
      })
      it('reducer должен изменить tab по изменившемуся ratio', () => {
        const tab = 'main';
        const ratio = 0.5;
        const expectedState = {
                    current: "main",
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
                ratio: 0.5,
            },
            ]
          }
        expect(tabReducer(initialState, {type: SET_RATIO, id:tab, ratio})).toEqual(expectedState)
         
      })
  }) 