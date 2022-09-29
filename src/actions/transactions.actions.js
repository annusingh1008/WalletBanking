import axios from "axios"
import { transactionsConstants } from "./constants";

export const getAllTransactions = () => {

    return async (dispatch) => {

        const email = localStorage.getItem('email')

        const res = await axios.get(`http://localhost:8085/getUserDetails/${email}`);

        const transactions = res.data.transactionsList;
        
        dispatch({ 
            type: transactionsConstants.TRANSACTIONS_SUCCESS,
            payload: transactions
        })

    }

}