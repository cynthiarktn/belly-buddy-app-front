import React, {useContext, useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import {Col, Row, Button, Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

export default function RegisterView() {
  const [fields, setFields] = useState({username: "", password: "", email: ""});
  const { register } = useContext(AuthContext);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleRegister = async () => {
    const success = await register(fields.username, fields.password, fields.email);
    if (success) {
      setShouldRedirect(true);
    }
  }

  if (shouldRedirect) {
    return <Navigate to="/login" />
  }

  return (

        <Form className="form-container">
        <h3 className="text-center heading p-3 text-danger">Rejoignez les buddies !</h3>
          <FormGroup className="p-2">
            <FormLabel htmlFor="username" className="heading dark-blue">Nom d'utilisateur</FormLabel>
            <FormControl
              type="text"
              id="username"
              placeholder="Un nom d’utilisateur unique comme vous"
              value={fields.username}
              onChange={form => setFields({...fields, username: form.target.value})}
            />
          </FormGroup>

          <FormGroup className="p-2">
            <FormLabel htmlFor="email" className="heading dark-blue">Email</FormLabel>
            <FormControl
              type="email"
              id="email"
              placeholder="Une adresse email coquette"
              value={fields.email}
              onChange={form => setFields({...fields, email: form.target.value})}
            />
          </FormGroup>

          <FormGroup className="p-2">
            <FormLabel htmlFor="password" className="heading dark-blue">Mot de passe</FormLabel>
            <FormControl
              type="password"
              id="password"
              placeholder="Un mot de passe costaud"
              value={fields.password}
              onChange={form => setFields({...fields, password: form.target.value})}
            />
          </FormGroup>

          <div className="d-flex justify-content-center">
            <Button
              className="btn btn-secondary align-items-center text-center mt-2 w-50 body-text fw-medium"
              onClick={() => handleRegister(fields.username, fields.password, fields.email)}
            >
              Créer un compte
            </Button>
          </div>

          <Link
            className="link-dark d-block text-center mt-2 dark-blue"
            as={Link}
            to="/login"
          >
            Déjà membre ? Connectez-vous
          </Link>
        </Form>
  );
}
