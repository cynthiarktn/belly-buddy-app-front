import React, {useState} from 'react';
import {Button, Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import config from "../config";

const RegisterForm = () => {

  // Initialize State
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Control Form Input

  const [emailError, setEmailError] = useState(false);
  const [registrationSuccess,setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  // Validate Email
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const navigate = useNavigate();

// Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(user.email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    fetch(`${config.backendUrl}/public/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (!response.ok) {
          // Si la réponse n'est pas OK, renvoyez une erreur avec le texte de la réponse
          return response.text().then(text => {
            throw new Error(`Error HTT! Status : ${response.status}, message : ${text}`);
          });
        }
        // Si la réponse est OK et le type de contenu est JSON, convertissez-la en JSON
        if (response.headers.get('Content-Type').includes('application/json')) {
          return response.json();
        }
        setRegistrationSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
  };

  // Form Component
  return (
    <Form onSubmit={handleSubmit} className="form-container">
      <h3 className="text-center heading p-3 text-danger">Rejoignez les buddies !</h3>
      <FormGroup className="p-2">
        <FormLabel htmlFor="username" className="heading dark-blue">Nom d'utilisateur</FormLabel>
        <FormControl
          type="text"
          name="username"
          placeholder="Un nom d’utilisateur unique comme vous"
          value={user.username}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="p-2">
        <FormLabel htmlFor="email" className="heading dark-blue">Email</FormLabel>
        <div className={`form-group ${emailError ? 'has-danger' : ''}`}>
          <FormControl
            type="email"
            name="email"
            placeholder="Une adresse email coquette"
            value={user.email}
            onChange={handleChange}
            className={`form-control ${emailError ? 'is-invalid' : ''}`}
            required
          />
          {emailError && <div className="invalid-feedback">
          Veuillez saisir une adresse email valide
            </div>}
        </div>
      </FormGroup>

      <FormGroup className="p-2">
        <FormLabel htmlFor="password" className="heading dark-blue">Mot de passe</FormLabel>
        <FormControl
          type="password"
          name="password"
          placeholder="Un mot de passe costaud"
          value={user.password}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <div className="d-flex justify-content-center">
        <Button
          className="btn btn-secondary align-items-center text-center mt-2 w-50 body-text fw-medium"
          onClick={handleSubmit}> Créer un compte
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        {registrationSuccess && <p className="text-success fw-medium mt-2">Inscription réussie !
          Vous allez être redirigé vers la page de connexion </p>}
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

export default RegisterForm;

