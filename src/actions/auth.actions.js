// import axios from "../helpers/axios";
import axios from "axios";
import { authConstants } from "./constants"
import { Redirect } from "react-router-dom";

export const login = (user) => {

    return async (dispatch) => {

        dispatch({type: authConstants.LOGIN_REQUEST})

        const res = await axios.post('http://localhost:8085/signin', {
            ...user
        })

        if(res.status === 200){
 
            if(res.data === "Signed in Successfully...!!"){
                
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('email', user.email);

                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: user
                })
            }else if(res.data === "Account does not exists with this email...!!"){
                alert("Please check your Email!!");
            }else if(res.data === "Incorrect Password...!!"){
                alert("Please check your Email and Password!!")
            }
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: res.error
            })
        }
    }
}

export const signout = () => {

    return async (dispatch) => {
        
        dispatch({type: authConstants.LOGOUT_SUCCESS});

        localStorage.clear();
        <Redirect to={`/signin`} />
        
    }
}
