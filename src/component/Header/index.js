import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { signout } from '../../actions/auth.actions';

const Header = (props) => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 2 }}>
            <Container fluid>
                <Link to="/" className="navbar-brand">Wallet Banking</Link>
            </Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {
                    !auth.authenticate ?
                        <Nav>
                            <li className="nav-item">
                                <NavLink to="signin" className="nav-link">Signin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="signup" className="nav-link">Signup</NavLink>
                            </li>
                        </Nav>
                        :
                        <Nav>
                            <li className="nav-item">
                                <span className="nav-link" onClick={logout} >Signout</span>
                            </li>
                        </Nav>
                }

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
