import { useState, useCallback } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = useCallback(async (username, password) => {
    try {
      const response = await axios.post('/api/public/users/login', { username, password });
      const { data } = response;
      if (data.token) {
        sessionStorage.setItem('token', data.token);
        setUser(data.user);  // Supposons que le backend renvoie un objet user
        console.log('Connexion réussie');
      }
    } catch (error) {
      console.error('Erreur de connexion', error);
    }
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem('token');
    setUser(null);
    console.log('Déconnecté');
  }, []);

  const register = useCallback(async (username, email, password) => {
    try {
      const response = await axios.post('/api/public/users/register', { username, email, password });
      const { data } = response;
      if (data.token) {
        sessionStorage.setItem('token', data.token);
        setUser(data.user);  // Supposons que le backend renvoie un objet user
        console.log('Inscription réussie');
      }
    } catch (error) {
      console.error("Erreur d'inscription", error);
    }
  }, []);

  return {
    user,
    login,
    logout,
    register
  };
};

export default useAuth;
