import { cashbackConstants } from "../actions/constants";

const initState = {
    cashbackList: []
}

const reducer = (state = initState, action) => {
    
    switch(action.type){

        case cashbackConstants.CASHBACK_SUCCESS:
            state = {
                ...state,
                cashbackList: action.payload
            }
            break;
    }

    return state;
}

export default reducer;