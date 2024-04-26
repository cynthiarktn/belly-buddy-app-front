import React, { useContext } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import '../../pages/css/style.css'
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/img/logo-belly-buddy.png';

const UserHeader = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    navigate("/login");
  }

  return (
    <>
      {isLoggedIn && (
        <div className="d-flex flex-column flex-shrink-0 bg-secondary-subtle w-25 min-vh-100">
          <Link to="/dashboard">
            <Navbar.Brand>
              <img className="logo" src={logo} alt="logo"/>
            </Navbar.Brand>
          </Link>
          <hr/>
          <Nav className="flex-column mb-auto">
            <Nav.Link as={Link} to="/dashboard" className="heading text-dark fw-bold">Trouver une recette</Nav.Link>
            <Nav.Link as={Link} to="/inventory" className="heading text-dark fw-bold">Mon inventaire</Nav.Link>
            <Nav.Link as={Link} to="/favoriteRecipes" className="heading text-dark fw-bold">Mes favoris</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="heading text-dark fw-bold">Mon profil</Nav.Link>
            <Nav.Link as={Link} to="/logout" className="heading text-dark fw-bold">Se déconnecter</Nav.Link>
          </Nav>
        </div>
      )}
    </>
  );
};

export default UserHeader;
