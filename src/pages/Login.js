import React, {useContext, useState} from 'react';
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "../context/AuthContext";
import config from "../config";

 const LoginForm = () => {
  const [user, setUser] = useState(
    {
      username: "",
      password: ""
    });

  const {setAuthToken, setIsLoggedIn, setUserId} = useContext(AuthContext);

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault
    fetch(`${config.backendUrl}/public/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Error HTTP! Status : ${response.status}, message : ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('accessToken', data.accessToken);
        setAuthToken(data.accessToken);
        setIsLoggedIn(true);
        setUserId(data.userId);
      })
      .catch(error => console.error(error));
  };

  return (
    <Form className="form-container">
      <h3 className="text-center heading p-3 text-danger">Connectez-vous</h3>
      <FormGroup className="p-2">
        <FormLabel htmlFor="username" className="heading dark-blue">Nom d'utilisateur</FormLabel>
        <FormControl
          type="text"
          name="username"
          placeholder="Votre nom d'utilisateur"
          value={user.username}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="p-2">
        <FormLabel htmlFor="password" className="heading dark-blue">Mot de passe</FormLabel>
        <FormControl
          type="password"
          name="password"
          placeholder="Votre mot de passe"
          value={user.password}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <div className="d-flex justify-content-center">
        <Button
          className="btn btn-secondary align-items-center text-center mt-2 w-50 body-text fw-medium"
          onClick={handleSubmit}
        >
          Connexion
        </Button>
      </div>
      <Link
        className="link-dark d-block text-center mt-2 dark-blue"
        as={Link}
        to="/register"
      >
        Nouveau ici ? Devenez membre
      </Link>
    </Form>
  );
};

 export default LoginForm;

