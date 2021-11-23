// reducers/hobby.js
const initialState = {
    list: [],
    selectedId: null,
    }
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
            ...state,
            list: newList,
            }
        }
        default:
            return state;
        }
    };
    export default userReducer;