import React from 'react'
import Layout from '../Layout'
import { Table } from 'react-bootstrap'
import './style.css';
import { useSelector } from 'react-redux';

const Transactions = () => {

  const auth = useSelector(state => state.auth);

  return (
    <Layout sidebar>
      <Table striped bordered hover className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Credit/ Debit</th>
            <th>Amount</th>
            <th>Current Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            auth.user.transactionsList.map((transactions, index) =>
              <tr key={index}>
                <td>{index+1}</td>
                <td>{transactions.from_name}</td>
                <td>{transactions.to_name}</td>
                <td>{transactions.type}</td>
                <td>{transactions.transferAmount}</td>
                <td>{transactions.amount}</td>
              </tr>
            )
          }

        </tbody>
      </Table>
    </Layout>
  )
}

export default Transactions
