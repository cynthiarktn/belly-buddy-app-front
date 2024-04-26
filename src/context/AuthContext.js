import React, {createContext, useEffect, useState} from "react";
import { UseAuth } from "../hooks/useAuth";
export const AuthContext = createContext({
  isLoggedIn: false,
  login: async (username, password) => {},
  register: async (username, email, password) => {},
  logout: () => {},
});

// permet de gérer l'état de connexion
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Vérifier si l'utilisateur est déjà connecté lors de l'initialisation du composant
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const authController = {
    isLoggedIn,
    login: (username, password) => login(username, password, setIsLoggedIn),
    register: (username, password, email) => register(true, username, password, email, setIsLoggedIn),
    logout: () => logout(setIsLoggedIn)
  };

  return (
    <AuthContext.Provider value={authController}>
      {children}
    </AuthContext.Provider>
  );
};

