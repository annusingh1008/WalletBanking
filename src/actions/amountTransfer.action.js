import axios from "axios"
import { amountTransferConstants } from "./constants"

export const amountTransfer = (amountDetails) => {

    console.log(amountDetails);

    return async (dispatch) => {
        
        dispatch({type: amountTransferConstants.AMOUNT_TRANSFER_REQUEST})

        const res = await axios.post('http://localhost:8085/transfer/amount', {
            ...amountDetails
        })

        console.log(res);

    }

}