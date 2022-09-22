import { authConstants } from "../actions/constants"

const initState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
    authenticate: false,
    loading: false,
    error: null,
    message: ''
}

export default (state = initState, action) => {

    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
            }
            break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload,
                authenticate: true
            }
    }

    return state;
}