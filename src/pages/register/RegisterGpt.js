import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';  // Assure-toi que le chemin d'import est correct

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await register(username, email, password);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="text-center heading p-3 text-danger">Rejoignez les buddies !</h3>
      <div className="p-2">
        <label className="heading dark-blue">Nom d'utilisateur </label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="p-2">
        <label className="heading dark-blue">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="p-2">
        <label className="heading dark-blue">Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit">S'inscrire</button>
      </div>
      <a className="link-dark d-block text-center mt-2 dark-blue"
         href="/login">
        Déjà un compte ? Connectez-vous</a>
      </form>
  );
};

export default Register;
