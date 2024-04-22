const API_BASE_URL = 'http://localhost:8181/api/'; // Ou l'URL de votre serveur Spring Boot

const register = async (userData) => {
  const response = await fetch(API_BASE_URL + 'public/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    throw new Error('Erreur d\'inscription');
  }

  return response.json();
};

export default {
  register,
  // Vous pouvez ajouter ici d'autres méthodes pour l'authentification, comme login, logout, etc.
};
