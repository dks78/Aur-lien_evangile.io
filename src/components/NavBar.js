import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col } from 'react-bootstrap';

export const NavBar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) { // Ajustez la valeur de défilement si nécessaire
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#Acceuil">
                    <Col>
                        <h1 className='CMCI'>CMCI</h1>
                    </Col>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Qui suis-je ?</Nav.Link>
                        <Nav.Link href="#temoignage">témoignage</Nav.Link>
                        <Nav.Link href="#temoignage">évangile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button className="vvd">
                    <span>Connexion</span>
                </button>
            </Container>
        </Navbar>
    );
}
