import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../asset/logo.jpg";

function Sidebar({ scrollToSection, refs }) {
  return (
    <Navbar expand="md" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ height: '100px', marginRight: '10px' }}
          />
          <div>
            <h1 className="text-primary mb-0" style={{ fontSize: '1.75rem' }}>Tanzania Road</h1>
            <h1 className="text-primary mb-0" style={{ fontSize: '1.75rem' }}>Accident Combustion</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Tanzania Road Accident Combustion
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-4">
              <Nav.Link onClick={() => scrollToSection(refs.dashboardRef)} className="text-primary mb-0">Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.projectsRef)} className="text-primary mb-0">Projects</Nav.Link>
              {/* <Nav.Link onClick={() => scrollToSection(refs.newsRef)} className="text-primary mb-0">News</Nav.Link> */}
              <Nav.Link onClick={() => scrollToSection(refs.eventRef)} className="text-primary mb-0">Event</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.teamRef)} className="text-primary mb-0">Team</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(refs.aboutUsRef)} className="text-primary mb-0">About Us</Nav.Link>
              
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
