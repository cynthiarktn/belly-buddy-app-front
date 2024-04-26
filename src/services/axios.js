import axios from 'axios';

// Crée une instance d'axios avec des options par défaut
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8181',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Ajouter un intercepteur de requête pour inclure le token JWT dans chaque requête si disponible
axiosInstance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
