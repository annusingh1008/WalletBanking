import { userConstants } from "./constants"
import axios from "axios";

export const signup = (user) => {

    console.log(user);

    return async (dispatch) => {

        dispatch({type: userConstants.USER_REGISTER_REQUEST})

        const res = await axios.post("http://localhost:8085/signup", {
            ...user
        })

        if(res.status === 200){
            if(res.data === "Account created successfully...!!"){
                dispatch({
                    type: userConstants.USER_REGISTER_SUCCESS,
                    payload: res.data
                })
                alert("Account Created Successfully!!")
            }else{
                alert("Email already exists...!! Please try with another Email")
                // dispatch({
                //     type: userConstants.USER_REGISTER_FAILURE,
                //     payload: "Email already exists...!!"
                // })
            }
        }else{
            dispatch({
                type: userConstants.USER_REGISTER_FAILURE,
                payload: {error: res.payload.error}
            })
        }

    }
}

