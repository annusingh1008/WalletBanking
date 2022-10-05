import React, { useState } from 'react'
import Layout from '../Layout'
import { Row, Col, Container, Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import  {amountTransfer}  from '../../actions/amountTransfer.action';
import { getUserDetails } from '../../actions/getUserDetails.actions';

const AmountTransfer = () => {

  const [confirmModal, setConfirmModal] = useState(false);
  const [amount, setAmount] = useState();
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const balance = useSelector(state => state.balance);

  // const confirmTransaction = (e) => {
  //   e.preventDefault();
  //   setConfirmModal(true);
  // }

  const confirmAmountTransfer = () => {
      console.log("confirm amount transfer");
      const userEmail = localStorage.getItem('email');
      const amountDetails = {
        email: userEmail,
        amount: amount, 
        creditToEmail: email,
        currentAmount: balance.amount,
      }
      
      dispatch(amountTransfer(amountDetails))
  
  }

  return (
    <Layout sidebar>
      <Container className='container'>
        <Row md={12}>
          <Col>
            <div className='heading'>Transfer Amount</div>
            <Form className='form' onSubmit={confirmAmountTransfer} >
              <label>Email</label><br />

              <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input><br />

              <label>Amount</label><br />

              <input
                type="text"
                placeholder='1000'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              ></input><br />

              <Button type='variant'>Transfer Amount</Button>
            </Form>
          </Col>
        </Row>

        {/* {confirmModal && (
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
        )} */}
      </Container>
    </Layout>
  )
}

export default AmountTransfer
