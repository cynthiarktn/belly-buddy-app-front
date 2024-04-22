import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import '../css/style.css'
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo-belly-buddy.png';

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
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
             activeKey="dashboard"
        >
          <div className="sidebar-sticky">
            <Nav.Item>
              <Nav.Link as={Link} to="/welcome">
                <img src={logo} alt="logo" width="150" />
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      )}
    </>
  );
};

export default UserHeader;
