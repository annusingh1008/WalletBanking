import axios from "axios"
import { transactionsConstants } from "./constants";

export const getAllTransactions = (currentPage) => {

    return async (dispatch) => {

        const email = localStorage.getItem('email')

        const res = await axios.get(`http://localhost:8085/getAllTransactions/${email}?pageNumber=${currentPage}&pageSize=${10}`);

        const transactions = res.data;
        
        dispatch({ 
            type: transactionsConstants.TRANSACTIONS_SUCCESS,
            payload: transactions
        })
    }

}

export const getTotalTransactions = () => {

    return async (dispatch) => {

        const email = localStorage.getItem('email')

        const res = await axios.get(`http://localhost:8085/getTotalTransactions/${email}`);
        
        dispatch({ 
            type: transactionsConstants.TOTAL_TRANSACTIONS_SUCCESS,
            payload: res.data
        })
    }

}

