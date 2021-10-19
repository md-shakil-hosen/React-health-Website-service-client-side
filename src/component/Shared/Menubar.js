import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
import logo from '../../image/logo-white.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Menubar = () => {
    const { logOutUser, user } = useAuth();
    return (
        <div>
            <Navbar className='Menubar' collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><img height='40px' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto logo-font ">
                            <HashLink className='nav' to="/home">Home</HashLink>
                            <HashLink className='nav' to="/about#about">About</HashLink>
                            <HashLink className='nav' to="/home#service">Service</HashLink>
                            <HashLink className='nav' to="/contact">Contact Us</HashLink>
                        </Nav>
                        <h6 className='m-3 text-white inline-block'>{user.displayName}</h6>
                        <Nav>
                            <div>
                                {!user.email ? (
                                    <NavLink to='/login'>
                                        <Nav.Link as={NavLink} className='mb-3 mb-lg-0' style={{
                                            border: '1px solid #07eeb6',
                                            padding: '5px 15px',
                                            borderRadius: '5px',
                                            color: 'white',
                                            textDecoration: 'none',
                                        }} to="/login">Log In</Nav.Link>
                                    </NavLink>
                                ) : (
                                    <Nav.Link className="ms-0 ms-lg-3 " style={{
                                        border: '1px solid #07eea0',
                                        padding: '5px 15px',
                                        borderRadius: '5px',
                                        color: 'white'
                                    }} onClick={logOutUser}>Log Out</Nav.Link>
                                )
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Menubar;