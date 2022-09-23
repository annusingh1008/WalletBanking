import { rechargeConstants } from "./constants";

export const recharge = (rechargeDetails) => {

    console.log(rechargeDetails);

    return async (dispatch) => {

        dispatch({type: rechargeConstants.RECHARGE_REQUEST});

        console.log("Recharge");
    }

}