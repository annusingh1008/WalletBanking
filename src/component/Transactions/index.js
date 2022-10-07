import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { Table, Button, InputGroup, FormControl, Card } from 'react-bootstrap'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions, getTotalTransactions } from '../../actions/transactions.actions';

const Transactions = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalTransactions())
    dispatch(getAllTransactions(0))
  }, [])

  const transactions = useSelector(state => state.transactions);
  const transactionList = transactions.transactions;
  // const reversedTransactionList = [...transactionList].reverse();

  const length = transactions.totalPages;
  const totalPages = length % 10 == 0 ? length / 10 : parseInt(length / 10) + 1;

  const [currentPage, setCurrentPage] = useState(0);

  const firstPage = () => {
    setCurrentPage(0);
    dispatch(getAllTransactions(0));
  };

  const prevPage = () => {
    setCurrentPage(currentPage-1);
    dispatch(getAllTransactions(currentPage-1));
  };

  const lastPage = () => {
    setCurrentPage(totalPages-1)
    dispatch(getAllTransactions(totalPages-1));
  };

  const nextPage = () => {
    setCurrentPage(currentPage+1);
    dispatch(getAllTransactions(currentPage+1));
  };


  return (
    <Layout sidebar >
      {
        transactionList.length !== 0 ?
          <>
            <Table striped bordered hover className='table'>
              <thead className='text-center'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>From</th>
                  <th scope='col'>To</th>
                  <th scope='col'>Credit/ Debit</th>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Current Amount</th>
                  <th scope='col'>Timestamp</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {
                  transactionList.map((transaction, index) =>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{transaction.from_name}</td>
                      <td>{transaction.to_name}</td>
                      <td>{transaction.type}</td>
                      <td>{transaction.transferAmount}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.date}</td>
                    </tr>
                  )
                }

              </tbody>
            </Table>
            <Card.Footer className='all-btn'>
              <div style={{ marginLeft: "450px" }}>
                Showing Page {currentPage+1} of {totalPages} 
              </div>
              <div style={{ marginLeft: "430px" }}>
                <InputGroup size="sm">
                    <Button
                      type="button"
                      className='button'
                      variant="outline-dark"
                      disabled={currentPage === 0 ? true : false}
                      onClick={firstPage}
                    >
                      First
                    </Button>
                    <Button
                      type="button"
                      className='button'
                      variant="outline-dark"
                      disabled={currentPage === 0 ? true : false}
                      onClick={prevPage}
                    >
                      Prev
                    </Button>
                  {/* <FormControl
                    className={"page-num bg-dark"}
                    name="currentPage"
                    value={currentPage}s
                  /> */}
                    <Button
                      type="button"
                      className='button'
                      variant="outline-dark"
                      disabled={currentPage === totalPages-1 ? true : false}
                      onClick={nextPage}
                    >
                      Next
                    </Button>
                    <Button
                      type="button"
                      className='button'
                      variant="outline-dark"
                      disabled={currentPage === totalPages-1 ? true : false}
                      onClick={lastPage}
                    >
                      Last
                    </Button>
                </InputGroup>
              </div>
            </Card.Footer>
          </>
          :

          <div className='no-transactions'>No Transactions</div>
      }




    </Layout>
  )
}

export default Transactions
