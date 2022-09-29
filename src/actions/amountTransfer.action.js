import axios from "axios"
import { amountTransferConstants } from "./constants"

export const amountTransfer = (amountDetails) => {

    console.log(amountDetails);

    return async (dispatch) => {
        
        dispatch({type: amountTransferConstants.AMOUNT_TRANSFER_REQUEST})

        const res = await axios.post('http://localhost:8085/transfer/amount', {
            ...amountDetails
        })

        const amount = parseInt(amountDetails.currentAmount) - parseInt(amountDetails.amount)

        const details = {
            amount: amount,
            accountNumber: amountDetails.accountNumber,
            transactionsList: amountDetails.transactionsList    
        }

        if (res.status === 200) {
            if(res.data === "Amount Transferred Successfully...!!"){
                dispatch({
                    type: amountTransferConstants.AMOUNT_TRANSFER_SUCCESS,
                    payload: details
                })
                alert("Transaction Successful")
            }else if(res.data === "Insufficient Amount"){
                alert("Transaction Failed, Insufficient Amount")
            }else{
                alert("Please check Account Number")
            }
            
        } else {
            dispatch({
                type: amountTransferConstants.AMOUNT_TRANSFER_FAILURE,
                payload: { error: res.payload.error }
            })
        }
    }

}