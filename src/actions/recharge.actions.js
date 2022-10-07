import axios from "axios";
import { rechargeConstants } from "./constants";

export const recharge = (rechargeDetails) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8085/recharge", {
      ...rechargeDetails,
    });

    const amount =
      parseInt(rechargeDetails.amount) +
      parseInt(rechargeDetails.currentAmount);

    const details = {
      email: rechargeDetails.email,
      amount: amount,
    };

    if (res.status === 200) {
      if (res.data === "Amount Credited Successfully...!!") {
        alert("Recharged Successful");

        dispatch({
          type: rechargeConstants.RECHARGE_SUCCESS,
          payload: details,
        });
      }
    }
  };
};
