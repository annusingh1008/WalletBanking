import axios from "axios"
import { amountTransferConstants } from "./constants"

export const amountTransfer = (amountDetails) => {

    console.log(amountDetails);

    return async (dispatch) => {

        dispatch({ type: amountTransferConstants.AMOUNT_TRANSFER_REQUEST })

        const res = await axios.post('http://localhost:8085/transfer/amount', {
            ...amountDetails
        })

        const amount = parseInt(amountDetails.currentAmount) - parseInt(amountDetails.amount)

        const details = {
            amount: amount,
            email: amountDetails.email,
        }

        console.log(res.data);

        if (res.status === 200) {
            if (res.data === "Insufficient Amount") {
                alert("Transaction Failed, Insufficient Amount")
            } else if (res.data === "User does not exist") {
                alert("User does not exist! \nPlease check your email.")
            }
            else if (res.data === "Enter a valid amount") {
                alert("Please enter a valid amount");
            }
            else if (res.data === "Amount Transferred Successfully...!!") {
                alert("Transaction Successful");
                if (res.data === "Amount Transferred Successfully...!!") {
                    dispatch({
                        type: amountTransferConstants.AMOUNT_TRANSFER_SUCCESS,
                        payload: details
                    })
                }
            }
        } else {
            alert("Something went wrong");
            dispatch({
                type: amountTransferConstants.AMOUNT_TRANSFER_FAILURE,
                payload: { error: res.payload.error }
            })
        }
    }

}