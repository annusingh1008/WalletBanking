import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../actions/user.actions'
import Layout from '../Layout'
import './style.css'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setAccountNumber("")
    }, [user.loading])

    const userSignup = (e) => {
        e.preventDefault();
        const user = { firstName, lastName, email, password, accountNumber }

        dispatch(signup(user));
    }

    return (
        <Layout>
            <Container style={{ marginTop: "110px" }}>
                <Row >
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>
                            <label>First Name</label>
                            <br />
                            <input
                                className='input'
                                placeholder="First Name"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <br />

                            <label className='label'>Last Name</label>
                            <br />
                            <input
                                className='input'
                                placeholder="Last Name"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            /> <br />

                            <label className='label'>Email</label>
                            <br />
                            <input
                                className='input'
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            /> <br />

                            <label className='label'>Password</label>
                            <br />
                            <input
                                className='input'
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            /> <br />

                            <label className='label'>Account Number</label>
                            <br />
                            <input
                                className='input'
                                placeholder="Account Number"
                                value={accountNumber}
                                minLength="10"
                                maxlength="10"
                                type="text"
                                onChange={(e) => setAccountNumber(e.target.value)}
                                required
                            /> <br />
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

export default Signup
