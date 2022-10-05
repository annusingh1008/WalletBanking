import axios from "axios"
import { cashbackConstants } from "./constants";

export const getAllCashBacks = (currentPage) => {
    return async (dispatch) => {

        const email = localStorage.getItem('email');

        const res = await axios.get(`http://localhost:8085/getAllCashbacks/${email}?pageNumber=${currentPage}&pageSize=${10}`);

        const cashbacks = res.data;

        dispatch({
            type: cashbackConstants.CASHBACK_SUCCESS,
            payload: cashbacks
        })
    }
}

export const getTotalCashbacks = () => {

    return async (dispatch) => {

        const email = localStorage.getItem('email')

        const res = await axios.get(`http://localhost:8085/getTotalCashbacks/${email}`);
        
        dispatch({ 
            type: cashbackConstants.TOTAL_CASHBACKS_SUCCESS,
            payload: res.data
        })
    }

}