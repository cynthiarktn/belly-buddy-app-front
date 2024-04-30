import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo-belly-buddy.png';

const GuestHeader = () => {
  return (
    <Navbar
      className='mb-5 bg-secondary-subtle'
      collapseOnSelect="true"
      sticky='top'
      expand='lg'
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Link to={'/home'}>
          <Navbar.Brand>
            <img className="logo" src={logo} alt="logo"/>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login" className="heading dark-blue fw-bold">Connexion</Nav.Link>
            <Nav.Link as={Link} to="/register" className="heading dark-blue fw-bold">Inscription</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default GuestHeader;
