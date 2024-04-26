import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3 className="text-center heading p-3 text-danger">Connectez-vous</h3>
      <div className="p-2">
        <label htmlFor="login" className="heading dark-blue">Nom d'utilisateur</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Votre nom d'utilisateur"
        />
      </div>
      <div className="p-2">
        <label htmlFor="login" className="heading dark-blue">Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Mot de passe"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit"
                className="btn btn-secondary align-items-center text-center mt-2 w-50 body-text fw-medium"
        >Se connecter
        </button>
      </div>
      <a className="link-dark d-block text-center mt-2 dark-blue"
          href="/register">
          Pas encore de compte ? Inscrivez-vous</a>
    </form>
  );
};

export default Login;
