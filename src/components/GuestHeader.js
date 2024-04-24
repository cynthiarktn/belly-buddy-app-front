import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../assets/logo-belly-buddy.png';

const GuestHeader = () => {
  return (
    <Navbar
      className='mb-5 custom-header'
      collapseOnSelect="true"
      sticky='top'
      expand='md'
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Link to={'/welcome'} className="ml-5">
          <Navbar.Brand>
            <img src={logo} alt="logo" width="100" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mr-5">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/welcome" className="custom-nav-link">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/login" className="custom-nav-link">Connexion</Nav.Link>
            <Nav.Link as={Link} to="/register" className="custom-nav-link">Inscription</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GuestHeader;
