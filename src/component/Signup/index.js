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

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }, [user.loading])

    const userSignup = (e) => {
        e.preventDefault();
        const user = { firstName, lastName, email, password }

        dispatch(signup(user));
    }

    return (
        <Layout>
            <Container style={{ marginTop: "150px" }}>
                <Row >
                    <Col md={{ span: 7, offset: 4 }}>
                        <Form onSubmit={userSignup}>
                            <label>First Name</label>
                            <br />
                            <input
                                className='input'
                                placeholder="First Name"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
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
                            /> <br />

                            <label className='label'>Email</label>
                            <br />
                            <input
                                className='input'
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            /> <br />

                            <label className='label'>Password</label>
                            <br />
                            <input
                                className='input'
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
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
