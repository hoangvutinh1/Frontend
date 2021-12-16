import { combineReducers } from "redux";
import historyReducer from "./history";
const rootReducer = combineReducers({
    history:historyReducer
    })
export default rootReducer;