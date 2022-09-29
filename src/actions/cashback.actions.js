import axios from "axios"
import { cashbackConstants } from "./constants";

export const getAllCashBacks = () => {
    return async (dispatch) => {

        const email = localStorage.getItem('email');

        const res = await axios.get(`http://localhost:8085/getUserDetails/${email}`);

        const cashbacks = res.data.cashbackList;

        dispatch({
            type: cashbackConstants.CASHBACK_SUCCESS,
            payload: cashbacks
        })
    }
}