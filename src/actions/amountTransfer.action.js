import axios from "axios";
import { amountTransferConstants } from "./constants";

export const amountTransfer = (amountDetails) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:8085/transfer/amount", {
      ...amountDetails,
    });

    const amount =
      parseInt(amountDetails.currentAmount) - parseInt(amountDetails.amount);

    const details = {
      amount: amount,
      email: amountDetails.email,
    };

    if (res.status === 200) {
      if (res.data === "User does not exist") {
        alert("User does not exist! \nPlease check your email.");
      } else if (res.data === "Amount Transferred Successfully...!!") {
        alert("Transaction Successful");

        dispatch({
          type: amountTransferConstants.AMOUNT_TRANSFER_SUCCESS,
          payload: details,
        });
      }
    }
  };
};
