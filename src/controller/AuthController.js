import React, {useState} from "react";


// permet de gérer les fonctions de connexion, inscription et déconnexion
export function AuthController() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fonction de connexion
  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:8181/api/public/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        setIsLoggedIn(true);
        console.log("Connecté");

      } else {
        // Gérer les erreurs ici
        console.error("Erreur de connexion");
      }
    } catch (error) {
      console.error("Erreur de connexion", error);
    }
  };

  // Fonction d'inscription
  const register = async (username, password, email) => {
    try {
      const response = await fetch("http://localhost:8181/api/public/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password, email })
      });

      if (response.ok) {
        console.log("Inscrit");
        return true;

      } else {
        // Gérer les erreurs ici
        console.error("Erreur d'inscription");
        return false;
      }
    } catch (error) {
      console.error("Erreur d'inscription", error);
      return false;
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    setIsLoggedIn(false);
    console.log("Déconnecté");
  };

  return { isLoggedIn, login, register, logout };
}
