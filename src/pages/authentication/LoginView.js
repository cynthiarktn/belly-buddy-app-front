import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {Col, Row, Button, Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginView() {
  const [fields, setFields] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);

  return (
      <Form className="form-container">
        <h3 className="text-center heading p-3 text-danger">Connectez-vous</h3>
        <FormGroup className="p-2">
          <FormLabel htmlFor="login" className="heading dark-blue">Nom d'utilisateur</FormLabel>
          <FormControl
            type="text"
            id="login"
            placeholder="Votre nom d'utilisateur"
            value={fields.username}
            onChange={form => setFields({...fields, username: form.target.value})}
          />
        </FormGroup>
        <FormGroup className="p-2">
          <FormLabel htmlFor="password" className="heading dark-blue">Mot de passe</FormLabel>
          <FormControl
            type="password"
            id="password"
            placeholder="Votre mot de passe"
            value={fields.password}
            onChange={form => setFields({...fields, password: form.target.value})}
          />
        </FormGroup>

        <div className="d-flex justify-content-center">
          <Button
            className="btn btn-secondary align-items-center text-center mt-2 w-50 body-text fw-medium"
            onClick={() => login(fields.username, fields.password)}
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

}
