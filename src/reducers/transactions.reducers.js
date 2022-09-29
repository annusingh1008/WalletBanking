import { transactionsConstants } from "../actions/constants";

const initState = {
    transactions: []
}

const reducer = (state = initState, action) => {

    switch(action.type){
        case transactionsConstants.TRANSACTIONS_SUCCESS:
            state = {
                ...state,
                transactions: action.payload
            }
    }

    return state;

}

export default reducer