import React from 'react'
import Layout from '../Layout'
import { Table } from 'react-bootstrap'
import './style.css';

const Transactions = () => {
  return (
    <Layout sidebar>
      <Table striped bordered hover className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Account Holder's Name</th>
            <th>Account Number</th>
            <th>Credit/ Debit</th>
            <th>Amount</th>
            <th>Current Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          
        </tbody>
      </Table>
    </Layout>
  )
}

export default Transactions
