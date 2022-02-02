export const SET_TAB:"SET_TAB" = "SET_TAB";
export const SET_RATIO:"SET_RATIO" = "SET_RATIO";
export const setTab=(currentTab:string)=>{
    return{
        type:SET_TAB,
        current:currentTab
    }
}
export const setRatio = (id:string, ratio:number)=>{
    return{
        type:SET_RATIO,
        id:id,
        ratio:ratio
    }
}
