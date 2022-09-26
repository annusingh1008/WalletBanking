import React, { useState } from 'react'
import Layout from '../Layout'
import { Row, Col, Container, Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import  {amountTransfer}  from '../../actions/amountTransfer.action';

const AmountTransfer = () => {

  const [confirmModal, setConfirmModal] = useState(false);
  const [amount, setAmount] = useState();
  const [accountNumber, setAccountNumber] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const confirmTransaction = (e) => {
    e.preventDefault();
    setConfirmModal(true);
  }

  const confirmAmountTransfer = () => {
      console.log("Transaction Successful");
      const amountDetails = {
        amount: amount, 
        accountNumber: auth.user.accountNumber,
        creditToAccountNumber: accountNumber,
        currentAmount: auth.user.amount,
        transactionsList: auth.user.transactionsList
      }
      dispatch(amountTransfer(amountDetails))
  }

  return (
    <Layout sidebar>
      <Container className='container'>
        <Row md={12}>
          <Col>
            <div className='heading'>Transfer Amount</div>
            <Form className='form' onSubmit={confirmTransaction} >
              <label>Account Number</label><br />

              <input
                type="text"
                placeholder='Account Number'
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              ></input><br />

              <label>Amount</label><br />

              <input
                type="text"
                placeholder='1000'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              ></input><br />

              <Button type='variant'>Transfer Amount</Button>
            </Form>
          </Col>
        </Row>

        {confirmModal && (
          <Modal
            show={confirmModal}
            onHide={() => {setConfirmModal(false)}}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure, you want to transfer Rs.{amount} to Jack
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setConfirmModal(false)}
              >
                Close
              </Button>
              <Button variant="primary" onClick={confirmAmountTransfer} >Confirm</Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </Layout>
  )
}

export default AmountTransfer
