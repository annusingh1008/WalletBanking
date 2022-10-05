import { getUserDetailsConstants } from "./constants";
import axios from "axios";

export const getUserDetails = (email) => {

    console.log("dispatched");

    return async dispatch => {

        dispatch({type : getUserDetailsConstants.GET_USER_DETAILS_REQUEST})

        const res = await axios.get(`http://localhost:8085/getUserDetails/${email}`);

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