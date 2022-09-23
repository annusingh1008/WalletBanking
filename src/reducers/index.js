import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import userDetailsReducer from "./userDetails.reducers";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    userDetails: userDetailsReducer
})

export default rootReducer;