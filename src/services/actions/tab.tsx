export const SET_TAB:"SET_TAB" = "SET_TAB";
export const SET_RATIO:"SET_RATIO" = "SET_RATIO";
export interface ISetTab{
    readonly type: typeof SET_TAB,
    readonly current:string,
}
export interface ISetRatio{
    readonly type: typeof SET_RATIO,
    readonly id:string,
    readonly ratio:number
}
export type TTabActions=ISetRatio|ISetTab
export const setTab=(currentTab:string):ISetTab=>{
    return{
        type:SET_TAB,
        current:currentTab
    }
}
export const setRatio = (id:string, ratio:number):ISetRatio=>{
    return{
        type:SET_RATIO,
        id:id,
        ratio:ratio
    }
}
