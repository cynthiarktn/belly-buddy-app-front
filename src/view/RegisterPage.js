import React, { useState } from 'react';
import authService from '../controller/authController';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { username, password, email };
      const response = await authService.register(user);
      // Gérer la suite de l'inscription (par exemple redirection ou message de succès)
    } catch (error) {
      // Gérer les erreurs ici
      console.error("Erreur d'inscription", error);
    }
  };

  return (
    <div>
      <h2>Rejoignez les buddies !</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterPage;
