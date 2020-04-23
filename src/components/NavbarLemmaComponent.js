import React from 'react';
import '../styles.css';
import { Navbar, Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

export default function NavbarLemma() {
    return (
        <div className="NavbarUnimorph">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        src="/src/visuals/favicon_logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Nav className="mr-auto">
                </Nav>

                

                <Nav>
                    <Nav.Link href="#about">About the project</Nav.Link>
                    <Nav.Link href="/language">Download Data</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>

            </Navbar>
        </div>
    );
}