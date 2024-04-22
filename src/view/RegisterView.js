import React, {useContext, useState} from 'react';
import { AuthContext } from '../context/AuthContext';
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
    <Row className="d-flex justify-content-center p-3 pt-5">
      <Col sm={12} md={6} lg={4}>
        <Form>
          <FormGroup>
            <FormLabel htmlFor="login">Identifiant</FormLabel>
            <FormControl
              type="text"
              id="login"
              placeholder="Veuillez entrer un identifiant"
              value={fields.username}
              onChange={form => setFields({...fields, username: form.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormControl
              type="email"
              id="email"
              placeholder="Veuillez entrer votre email"
              value={fields.email}
              onChange={form => setFields({...fields, email: form.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="password">Mot de passe</FormLabel>
            <FormControl
              type="password"
              id="password"
              placeholder="Veuillez entrer un mot de passe"
              value={fields.password}
              onChange={form => setFields({...fields, password: form.target.value})}
            />
          </FormGroup>

          <Button
            className="w-100"
            onClick={() => handleRegister(fields.username, fields.password, fields.email)}
          >
            Inscription
          </Button>
          <Link
            className="link-dark d-block text-center mt-2"
            as={Link}
            to="/login"
          >
            Déjà membre ? Connectez-vous
          </Link>
        </Form>
      </Col>
    </Row>
  );
}
