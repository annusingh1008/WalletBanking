import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import Layout from '../Layout'
import './style.css';

const WalletRecharge = () => {

  const [amount, setAmount] = useState();
  const [confirmModal, setConfirmModal] = useState(false);

  const recharge = (e) => {
    
    e.preventDefault();
    setConfirmModal(true);
    console.log("Recharged Successfully");
  }

  if (confirmModal) {
    return (
      <>
      {/* Recharge */}
      <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
      </>
    )
  }

  return (
    <Layout sidebar>
      <Container className='container'>
        <Row md={12}>
          <Col>
            <div className='heading'>Wallet Recharge</div>
            <Form className='form' onSubmit={recharge} >
              <label>Amount</label><br />
              <input
                type="text"
                placeholder='1000'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              ></input><br />
              <Button type='variant'>Recharge</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default WalletRecharge
