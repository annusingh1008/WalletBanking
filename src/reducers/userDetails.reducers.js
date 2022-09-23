import { getUserDetailsConstants } from "../actions/constants"

const initState = {
    userDetails: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        accountNumber: '',
        amount: ''
    }
}

export default (state = initState, action) => {

    console.log(action);

    switch(action.type){
        case getUserDetailsConstants.GET_USER_DETAILS_REQUEST:
            state = {
                ...state
            }
            break;
    }

    return state;

}