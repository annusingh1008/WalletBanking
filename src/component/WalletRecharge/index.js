import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Modal, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { recharge } from '../../actions/recharge.actions';
import Layout from '../Layout'
import './style.css';

const WalletRecharge = () => {

  const [amount, setAmount] = useState();
  const [confirmModal, setConfirmModal] = useState(false);

  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth)
  const balance = useSelector(state => state.balance)

  // const confirmRecharge = (e) => {
  //   e.preventDefault();
  //   setConfirmModal(true);
  // }

  const walletRecharge = (e) => {

    const userEmail = localStorage.getItem('email')

    const rechargeDetails = {
      email: userEmail,
      amount: amount,
      currentAmount: balance.amount
    }

    dispatch(recharge(rechargeDetails));
  }

  return (
    <Layout sidebar>
      <Container className='container'>
        <Row md={12}>
          <Col>
            <div className='heading'>Wallet Recharge</div>
            <Form className='form' onSubmit={walletRecharge} >
              <label>Amount</label><br />
              <input
                type="text"
                placeholder='1000'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              ></input><br />
              <Button type='variant'>Recharge</Button>
            </Form>
          </Col>
        </Row>

        {/* {confirmModal && (
          <Modal
            show={confirmModal}
            onHide={() => setConfirmModal(false)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setConfirmModal(false)}
              >
                Close
              </Button>
              <Button variant="primary" >Confirm</Button>
            </Modal.Footer>
          </Modal>
        )} */}
      </Container>
    </Layout>
  )
}

export default WalletRecharge
