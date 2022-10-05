import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout from '../Layout';
import { login } from '../../actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { Redirect } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  const userLogin = (e) => {
    e.preventDefault();
    const user = { email, password };

    dispatch(login(user));
  }

  if (auth.authenticate) {
    return <Redirect to={'/'} />
  }

  return (
    <Layout>
      <Container style={{ marginTop: "110px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <label data-testid="button">Email</label>
              <br />
              <input
                className='input'
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              /> <br />

              <label data-testid="button" className='label'>Password</label>
              <br />
              <input
                className='input'
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              /> <br/>
              <Button className='btn' variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Signin
