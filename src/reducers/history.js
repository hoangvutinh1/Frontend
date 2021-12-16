// reducers/hobby.js
const initialState = {
    textViet: [],
    textHue:[],
    isLoad:false
    }
const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_HISTORY': {
                return {
                    ...state,
                    isLoad:action.payload
                }
            }
        case 'ADD_VIET_HISTORY':{
            const newList=[...state.textViet];
            const payload=action.payload.split('\n'); 
            newList.push(action.payload);
           
            return {
                ...state,
                textViet:newList
            }
        }
        case 'ADD_HUE_HISTORY':{
            const newList=[...state.textHue];
            const payload=action.payload.split('\n'); 
            newList.push(action.payload);
            return {
                ...state,
                textHue:newList
            }
        }
        default:
            return state;
        }
    };
    export default historyReducer;