import React, {useContext, useEffect, useState} from "react";
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import config from "../config";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const {setAuthToken, setIsLoggedIn, setUserId} = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    console.log('Token:', token);

    fetch(`${config.backendUrl}/user/profile/getInfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Form className="form-container">
      <h3 className="text-center heading p-3 dark-blue">Mon profil</h3>
      <FormGroup className="p-2">
        <FormLabel htmlFor="username" className="heading dark-blue">Nom d'utilisateur</FormLabel>
        <FormControl
          type="text"
          name="username"
          placeholder={user.username}
          value={user.username}
          readOnly={true}
        />
      </FormGroup>

      <FormGroup className="p-2">
        <FormLabel htmlFor="email" className="heading dark-blue">Adresse email</FormLabel>
        <FormControl
          type="email"
          name="email"
          placeholder={user.email}
          value={user.email}
          readOnly={true}
        />
      </FormGroup>

      <FormGroup className="p-2">
        <FormLabel htmlFor="password" className="heading dark-blue">Mot de passe</FormLabel>
        <FormControl
          type="password"
          name="password"
          placeholder={user.password}
          value={user.password}
          readOnly={true}
        />
      </FormGroup>
      <div className="d-flex justify-content-center">
        <Button
          className="btn btn-secondary align-items-center text-center mt-2 w-75 body-text fw-medium"> Modifier mes informations
        </Button>
      </div>
      {/*<Link to="/register"*/}
      {/*      className="link-dark d-block text-center mt-2 dark-blue"*/}
      {/*>Annuler</Link>*/}
    </Form>
  );
}

export default UserProfile;
