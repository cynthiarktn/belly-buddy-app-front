import React, {createContext} from "react";
import { AuthController } from "../controller/AuthController";
export const AuthContext = createContext({
  isLoggedIn: false,
  login: async (username, password) => {},
  register: async (username, email, password) => {},
  logout: () => {},
});

// permet de gérer l'état de connexion
export const AuthProvider = ({ children }) => {
  const authController = AuthController();
  return (
    <AuthContext.Provider value={authController}>
      {children}
    </AuthContext.Provider>
  );
};
