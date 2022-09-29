import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import transactionReducer from './transactions.reducers'
import cashbackReducer from './cashback.reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    transactions: transactionReducer,
    cashbacks: cashbackReducer
})

export default rootReducer;