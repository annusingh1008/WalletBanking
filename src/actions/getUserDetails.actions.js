import { getUserDetailsConstants } from "./constants";
import axios from "axios";

export const getUserDetails = (email) => {

    return async dispatch => {

        console.log("Dispatched");
        dispatch({type : getUserDetailsConstants.GET_USER_DETAILS_REQUEST})

        const res = await axios.post("http://localhost:8085/getUserDetails", email);

        if(res.status === 200){
            dispatch({
                type: getUserDetailsConstants.GET_USER_DETAILS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: getUserDetailsConstants.GET_USER_DETAILS_FAILURE,
                payload: {error: res.payload.error}
            })
        }
    }

}