import axios from "axios";
import { rechargeConstants } from "./constants";

export const recharge = (rechargeDetails) => {

    console.log("rechargeDeatils", rechargeDetails);

    return async (dispatch) => {

        dispatch({ type: rechargeConstants.RECHARGE_REQUEST });

        const res = await axios.post("http://localhost:8085/recharge", {
            ...rechargeDetails
        })

        console.log(res.data);

        const amount = parseInt(rechargeDetails.amount) + parseInt(rechargeDetails.currentAmount);

        const details = {
            email: rechargeDetails.email,
            amount: amount
        }

        console.log(res.data);

        if (res.status === 200) {
            if (res.data === "Amount Credited Successfully...!!") {
                alert("Recharged Successful")
                if (res.data === "Amount Credited Successfully...!!") {
                    dispatch({
                        type: rechargeConstants.RECHARGE_SUCCESS,
                        payload: details
                    })
                }
            } else if (res.data === "Enter a valid amount") {
                alert("Please enter a valid amount")
            }
        } else {
            alert("Recharged Failed...!! \nSomething went wrong")
            dispatch({
                type: rechargeConstants.RECHARGE_FAILURE,
                payload: { error: res.payload.error }
            })
        }
    }

}