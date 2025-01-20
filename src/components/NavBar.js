import React, { useEffect } from 'react';
import { Navbar, Container, Nav, Col } from 'react-bootstrap';

export const NavBar = () => {

  useEffect(() => {
    const canvas = document.getElementById('navbar-canvas');
    const ctx = canvas.getContext('2d');
    
    // Ajuste la taille du canvas pour qu'il couvre toute la largeur de la fenêtre
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 80; // Hauteur de la navbar
    };

    // Lors du redimensionnement de la fenêtre, le canvas s'ajuste
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Ajuste la taille au chargement

    // Dessiner un arrière-plan dégradé
    const drawCanvasBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#0066ff');
      gradient.addColorStop(1, '#00ccff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    drawCanvasBackground(); // Dessine le fond au chargement

    return () => {
      window.removeEventListener('resize', resizeCanvas); // Nettoyage de l'écouteur
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Canvas pour l'arrière-plan de la navbar */}
      <canvas id="navbar-canvas" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Assure que le canvas est derrière la navbar
        pointerEvents: 'none', // Empêche toute interaction avec le canvas
      }} />

      {/* La Navbar */}
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#Acceuil">
            <Col>
              <h1 className="CMCI">CMCI</h1>
            </Col>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Hom">Accueil</Nav.Link>
              <Nav.Link href="#Activite">Activité</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button className="vvd">
            <span>Connexion</span>
          </button>
        </Container>
      </Navbar>
    </div>
  );
};
