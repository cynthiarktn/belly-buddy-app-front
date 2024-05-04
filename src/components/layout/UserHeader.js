import React, { useContext } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import '../../css/style.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../../../public/logo-belly-buddy-line.png';

const UserHeader = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <>
      {isLoggedIn && (
        <div className="d-flex flex-column flex-shrink-0 bg-secondary-subtle w-25 vh-100 sticky-top position-fixed pt-4 ps-3" style={{left: 0}}>
          <Link to="/dashboard">
            <Navbar.Brand>
              <img className="logo" src={logo} alt="logo"/>
            </Navbar.Brand>
          </Link>
          <hr/>
          <Nav className="flex-column mb-auto">
            <Nav.Link as={Link} to="/findRecipe"
                      className={`heading fw-bold ${location.pathname === "/findRecipe" ? "active-link" : "default-link"}`}>
              Trouver une recette</Nav.Link>
            <Nav.Link as={Link} to="/inventory"
                      className={`heading fw-bold ${location.pathname === "/inventory" ? "active-link" : "default-link"}`}>
              Mon inventaire</Nav.Link>
            <Nav.Link as={Link} to="/favoriteRecipes"
                      className={`heading fw-bold ${location.pathname === "/favoriteRecipes" ? "active-link" : "default-link"}`}>
              Mes favoris</Nav.Link>
            <Nav.Link as={Link} to="/profile"
                      className={`heading fw-bold ${location.pathname === "/profile" ? "active-link" : "default-link"}`}>
              Mon profil</Nav.Link>
            <Nav.Link onClick={handleLogout}
                      className={`heading fw-bold ${location.pathname === "/profile" ? "active-link" : "default-link"}`}>Se déconnecter</Nav.Link>
          </Nav>
        </div>
      )}
    </>
  );
};

export default UserHeader;
