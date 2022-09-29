import React, { useEffect } from 'react'
import Layout from '../Layout'
import { Table } from 'react-bootstrap'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from '../../actions/transactions.actions';

const Transactions = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions())
  }, [])

  const transactions = useSelector(state => state.transactions);

  return (
    <Layout sidebar >

      <Table striped bordered hover className='table'>
        <thead className='text-center'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>From</th>
            <th scope='col'>To</th>
            <th scope='col'>Credit/ Debit</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Current Amount</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            transactions.transactions.map((transaction, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transaction.from_name}</td>
                <td>{transaction.to_name}</td>
                <td>{transaction.type}</td>
                <td>{transaction.transferAmount}</td>
                <td>{transaction.amount}</td>
              </tr>
            )
          }

        </tbody>
      </Table>
    </Layout>
  )
}

export default Transactions
