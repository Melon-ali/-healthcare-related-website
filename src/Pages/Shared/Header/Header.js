import React from 'react';
import { Container,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand to="/home">General Hospital</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/services">Services</Link>
                    <Link className="link" to="/doctors">Doctors</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/login">Login</Link>
                    <Navbar.Text>
                        Signed in as: <a to="">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
  
        </>
    );
};

export default Header;