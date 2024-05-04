import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
import logo from '../../../public/logo-belly-buddy.png';
import '../../css/style.css'

const GuestHeader = () => {
  const location = useLocation();

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
            <Nav.Link as={Link} to="/login"
                      className={`heading fw-bold ${location.pathname === "/login" ? "active-link" : "default-link"}`}>
              Se connecter</Nav.Link>
            <Nav.Link as={Link} to="/register"
                      className={`heading fw-bold ${location.pathname === "/register" ? "active-link" : "default-link"}`}>
              S'inscrire</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default GuestHeader;
