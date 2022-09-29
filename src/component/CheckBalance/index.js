import React from 'react'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css';
import { useSelector } from 'react-redux';

const CheckBalance = () => {

    const auth = useSelector(state => state.auth);

    return (
        <Layout sidebar>
            <Container className='container'>
                <Row md={12}>
                    <Col>
                        <div className='heading'>Current Balance</div>
                        <div className='balance'>Rs. {auth.user.amount}</div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default CheckBalance
