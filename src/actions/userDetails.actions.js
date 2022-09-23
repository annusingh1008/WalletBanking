import { getUserDetailsConstants } from "./constants";
import axios from "axios";

export const getUserDetails = async (email) => {

    console.log(email);

    return async (dispatch) => {

        console.log("request should dispatch");

        // dispatch({type : getUserDetailsConstants.GET_USER_DETAILS_REQUEST})

        console.log("request is dispatched");

        const res = await axios.post("http://localhost:8085/getUserDetails", email);
        console.log(res);

        // if(res.status === 200){
        //     dispatch({
        //         type: getUserDetailsConstants.GET_USER_DETAILS_SUCCESS,
        //         payload: res.data
        //     })
        // }else{
        //     dispatch({
        //         type: getUserDetailsConstants.GET_USER_DETAILS_FAILURE,
        //         payload: {error: res.payload.error}
        //     })
        // }
    }

}