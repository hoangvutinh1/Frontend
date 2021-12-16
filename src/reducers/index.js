import hobbyReducer from "./hobby";
import { combineReducers } from "redux";
import userReducer from "./user";
import historyReducer from "./history";
const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user:userReducer,
    history:historyReducer
    })
export default rootReducer;