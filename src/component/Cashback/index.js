import React, { useEffect } from 'react'
import Layout from '../Layout'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCashBacks } from '../../actions/cashback.actions'
import './style.css';

const Cashback = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCashBacks());
    }, [])

    const cashbacks = useSelector(state => state.cashbacks);
    console.log(cashbacks);

    return (
        <Layout sidebar>
            <Table striped bordered hover className='cashback-table'>
                <thead className='text-center'>
                    <tr>
                        <th>#</th>
                        <th>Cashback Earned</th>
                        <th>Current Amount</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        cashbacks.cashbackList.map((cashback, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{cashback.cashback_amount}</td>
                                <td>{cashback.current_amount}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </Layout>
    )
}

export default Cashback
