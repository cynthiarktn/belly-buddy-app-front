import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../assets/logo-belly-buddy.png';

const GuestHeader = () => {
  return (
    <Navbar
      className='mb-5'
      collapseOnSelect="true"
      bg='light'
      sticky='top'
      expand='md'
    >
      <Link to={'/welcome'}>
        <Navbar.Brand>
          <img src={logo} alt="logo" width="150" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/welcome">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/login">Connexion</Nav.Link>
          <Nav.Link as={Link} to="/register">Inscription</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default GuestHeader;
