import axios from "axios";
import { rechargeConstants } from "./constants";

export const recharge = (rechargeDetails) => {

    console.log("rechargeDeatils", rechargeDetails); 

    return async (dispatch) => {

        dispatch({ type: rechargeConstants.RECHARGE_REQUEST });

        const res = await axios.post("http://localhost:8085/recharge", {
            ...rechargeDetails
        })

        const amount = parseInt(rechargeDetails.amount) + parseInt(rechargeDetails.currentAmount);

        const details = {
            accountNumber: rechargeDetails.accountNumber,
            amount: amount
        }

        if (res.status === 200) {
            dispatch({
                type: rechargeConstants.RECHARGE_SUCCESS,
                payload: details
            })
            alert("Recharged Successfully")
        } else {
            dispatch({
                type: rechargeConstants.RECHARGE_FAILURE,
                payload: { error: res.payload.error }
            })
        }
    }

}