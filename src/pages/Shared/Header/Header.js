
import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import img from './logo.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth)
    }


    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={img} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home </Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>

                            {
                                user && <>
                                    <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manageservice">manage</Nav.Link>
                                    <Nav.Link as={Link} to="orders">orders</Nav.Link>
                                </>
                            }


                            {user ?

                                <button onClick={handleLogOut}> log Out</button>
                                :

                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;