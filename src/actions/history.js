export const loadHistory = (history)=>{
    return {
        type:'LOAD_HISTORY',
        payload:history
    }
}
export const addHueHistory = (history)=>{
    return {
        type:'ADD_HUE_HISTORY',
        payload:history
    }
}
export const addVietHistory = (history)=>{
    return {
        type:'ADD_VIET_HISTORY',
        payload:history
    }
}
export const setActiveHobby=( hobby)=>{
    return {
        type:'SET_ACTIVE_HOBBY',
        payload:hobby
    }
}
export const toggleToolbar=(isToggle)=>{
    return {
        type:'toggleToolbar',
        payload:'isToggle'
    }
}