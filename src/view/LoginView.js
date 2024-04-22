import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {Col, Row, Button, Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginView() {
  const [fields, setFields] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);

  return (
    <Row className="d-flex justify-content-center p-3 pt-5">
      <Col sm={12} md={6} lg={4}>
        <Form>
          <FormGroup>
            <FormLabel htmlFor="login">Nom d'utilisateur</FormLabel>
            <FormControl
              type="text"
              id="login"
              placeholder="Votre nom d'utilisateur"
              value={fields.username}
              onChange={form => setFields({...fields, username: form.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Mot de passe</FormLabel>
            <FormControl
              type="password"
              id="password"
              placeholder="Votre mot de passe"
              value={fields.password}
              onChange={form => setFields({...fields, password: form.target.value})}
            />
          </FormGroup>
          <Button
            className="w-100"
            onClick={() => login(fields.username, fields.password)}
          >
            Connexion
          </Button>
          <Link
            className="link-dark d-block text-center mt-2"
            as={Link}
            to="/register"
          >
            Nouveau ici ? Devenez membre
          </Link>
        </Form>
      </Col>
    </Row>
  );

}
